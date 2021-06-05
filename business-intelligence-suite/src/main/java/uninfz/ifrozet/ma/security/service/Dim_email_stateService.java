package uninfz.ifrozet.ma.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uninfz.ifrozet.ma.beans.Dim_email_state;
import uninfz.ifrozet.ma.repository.Dim_email_stateDao;


@Service
public class Dim_email_stateService {

	@Autowired
	private Dim_email_stateDao dim_email_stateDao ;

	public Dim_email_state findByName(String ref) {
		return dim_email_stateDao.findByName(ref);
	}

	public int deleteByName(String ref) {
		return dim_email_stateDao.deleteByName(ref);
	}

	public int save(Dim_email_state email_state) {
		if(findByName(email_state.getName()) != null) {
			return -1;
		}else {
			dim_email_stateDao.save(email_state);
			return 1;
		}
	}

	public List<Dim_email_state> findAll() {
		return dim_email_stateDao.findAll();
	}

	
}
