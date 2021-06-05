package uninfz.ifrozet.ma.util;

import java.util.List;

import uninfz.ifrozet.ma.beans.Dim_categorie;
import uninfz.ifrozet.ma.beans.Dim_country;
import uninfz.ifrozet.ma.beans.Dim_email_state;
import uninfz.ifrozet.ma.beans.User;


public interface Fct_email_dataVo {
	
	public int save(List<String>  lis_email_data,Dim_country country ,Dim_email_state state ,Dim_categorie cat ,User user);
}
