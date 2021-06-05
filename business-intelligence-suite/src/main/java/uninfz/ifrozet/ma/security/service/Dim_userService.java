package uninfz.ifrozet.ma.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uninfz.ifrozet.ma.beans.Dim_country;
import uninfz.ifrozet.ma.beans.User;
import uninfz.ifrozet.ma.repository.UserRepository;
import uninfz.ifrozet.ma.util.UserRepoVo;


@Service
public class Dim_userService {

	@Autowired
	private UserRepository dim_userDao;

	@Autowired
	private UserRepoVo userVo;
	@Autowired
	private Dim_countryService countryService;

	public int save(User dim_user) {
		Dim_country country = countryService.findByReference(dim_user.getCt_id().getReference());
		if(findByUsername(dim_user.getUsername()) != null){
			return -1;
		}else if(country == null){
			return -2;
		}else {
			dim_user.setCt_id(country);
			dim_userDao.save(dim_user);
			return 1;
		}
	}
	
	public User loginUser(User dim_user){
		User login_user = findByEmailAndPassword( dim_user.getEmail(), dim_user.getPassword());
		if(login_user != null){
			return login_user;
		}else {
			return null;
		}
	}
	
	public User findByEmail(String ref) {
		return dim_userDao.findByEmail(ref);
	}
	
	public User findByEmailAndPassword(String email,String password) {
		return dim_userDao.findByEmailAndPassword( email, password);
	}
	public User findByUsername(String ref) {
		return userVo.findByUsername(ref);
	}


	public int deleteByEmail(String ref) {
		return dim_userDao.deleteByEmail(ref);
	}


	public List<User> findAll() {
		return dim_userDao.findAll();
	}


	



	
}
