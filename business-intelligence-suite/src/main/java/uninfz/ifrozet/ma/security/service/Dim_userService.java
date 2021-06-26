package uninfz.ifrozet.ma.security.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.support.Repositories;
import org.springframework.stereotype.Service;

import uninfz.ifrozet.ma.beans.Dim_country;
import uninfz.ifrozet.ma.beans.User;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import uninfz.ifrozet.ma.repository.UserRepository;
import uninfz.ifrozet.ma.util.request.UserRepoVo;


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
	public User findByUsername(String ref) {
		return userVo.findByUsername(ref);
	}

	public  List<User> searshUser(String ref) {
		List<User> users = new ArrayList<User>();
		if(findByUsername(ref) != null) {
			users.add(findByUsername(ref));
		}else if(findByEmail(ref) != null) {
			users.add(findByEmail(ref));
		}else if(dim_userDao.findByFirstname(ref) != null) {
			User user = dim_userDao.findByFirstname(ref);
			users.add(user);
		}else if(dim_userDao.findByLastname(ref) != null) {
			users.add(dim_userDao.findByLastname(ref));
		}
		return users;
	}
	
	public User findByEmailAndPassword(String email,String password) {
		return dim_userDao.findByEmailAndPassword( email, password);
	}


	public int deleteByEmail(String ref) {
		return dim_userDao.deleteByEmail(ref);
	}


	public List<User> findAll() {
		return dim_userDao.findAll();
	}

	public int putUser(User user) {
		User userback = findByEmail(user.getUsername());
		//Dim_country country = 
		userback.setAdresse(user.getAdresse());
		userback.setDateNess(user.getDateNess());
		userback.setLastname(user.getLastname());
		userback.setFirstname(user.getFirstname());
		userback.setCodePoste(user.getCodePoste());
		userback.setCin(user.getCin());
		//userback.setCt_id();;
		userback.setPhone(user.getPhone());
		userback.setVille(user.getVille());
		userback.setGenre(user.getGenre());
		return 1;
	}

	public int putuser(Long id, User user) {
		// TODO Auto-generated method stub
		return 0;
	}

	public boolean updateUser(User user, Boolean state) {
		User user2 = findByEmail(user.getEmail());
		user2.setState(state);
		return true;
	}

	public ResponseEntity<User> updateUser(Boolean state, User user) {
		if(existsById(user.getId())) {
			User user2 = findByEmail(user.getEmail());
			System.out.println("----2----avant-------"+user2.getState());
			System.out.println("----3----avant-------"+state);
			user2.setState(state);
			userVo.save(user2);
			System.out.println("----4----apres-------"+user2.getState());
			return new ResponseEntity<>(userVo.save(user2), HttpStatus.OK);
		}
		return new ResponseEntity<>( HttpStatus.NOT_FOUND);
	}

	public Boolean existsByUsername(String username) {
		return dim_userDao.existsByUsername(username);
	}

	public Boolean existsByEmail(String email) {
		return dim_userDao.existsByEmail(email);
	}

	public boolean existsById(Long id) {
		return dim_userDao.existsById(id);
	}


	



	
}
