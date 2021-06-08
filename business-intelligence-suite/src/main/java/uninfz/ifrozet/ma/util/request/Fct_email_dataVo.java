package uninfz.ifrozet.ma.util.request;

import java.util.List;

import org.springframework.stereotype.Repository;

import uninfz.ifrozet.ma.beans.Dim_categorie;
import uninfz.ifrozet.ma.beans.Dim_country;
import uninfz.ifrozet.ma.beans.Dim_email_state;
import uninfz.ifrozet.ma.beans.User;

@Repository
public interface Fct_email_dataVo {
	public int save(List<String>  lis_email_data,Dim_country country ,Dim_email_state state ,Dim_categorie cat ,User user);
}
