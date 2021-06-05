package uninfz.ifrozet.ma.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uninfz.ifrozet.ma.beans.Dim_country;
import uninfz.ifrozet.ma.repository.Dim_countryDao;


@Service
public class Dim_countryService {

	@Autowired
	private Dim_countryDao countryDao;

	public Dim_country findByReference(String ref) {
		return countryDao.findByReference(ref);
	}

	public int deleteByReference(String ref) {
		return countryDao.deleteByReference(ref);
	}

	public int save(Dim_country entity) {
		 countryDao.save(entity);
		 return 1;
	}

	public List<Dim_country> findAll() {
		return countryDao.findAll();
	}

	
}
