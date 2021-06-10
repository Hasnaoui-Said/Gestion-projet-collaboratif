package uninfz.ifrozet.ma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uninfz.ifrozet.ma.beans.DataCheck;
import uninfz.ifrozet.ma.beans.Fct_email_data;


@Repository
public interface DataCkeckDao extends JpaRepository<DataCheck, Long> {

	public DataCheck findByEmail(String ref);
	//public Fct_email_data findByCat_idName(String ref);
	public int deleteByEmail(String ref);
	public int save(Fct_email_data email_data2);
	
}
