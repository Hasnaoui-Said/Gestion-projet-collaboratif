package uninfz.ifrozet.ma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uninfz.ifrozet.ma.beans.Dim_country;


@Repository
public interface Dim_countryDao extends JpaRepository<Dim_country, Long> {

	public Dim_country findByReference(String ref);
	public int deleteByReference(String ref);
	
}
