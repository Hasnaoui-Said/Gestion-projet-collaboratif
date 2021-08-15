package uninfz.ifrozet.ma.security.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uninfz.ifrozet.ma.beans.*;
import uninfz.ifrozet.ma.repository.DataCkeckDao;
import uninfz.ifrozet.ma.repository.Fct_email_dataDao;
import uninfz.ifrozet.ma.util.request.Fct_email_dataVo;


@Service
public class Fct_email_dataService implements Fct_email_dataVo {

	@Autowired
	private Fct_email_dataDao email_dataDao ;
	@Autowired
	private DataCkeckDao ckeckDao ;
	@Autowired
	private Dim_userService userService  ;
	@Autowired
	private Dim_countryService countryService;
	@Autowired
	private Dim_email_stateService email_state;
	@Autowired
	private Dim_categorieService categorieService;

	public Fct_email_data findByEmail(String ref) {
		return email_dataDao.findByEmail(ref);
	}
	public DataCheck findByEmailTest(String ref) {
		return ckeckDao.findByEmail(ref);
	}

	public int deleteByEmail(String ref) {
		return email_dataDao.deleteByEmail(ref);
	}

	public List<String> stringToArraylist(String st){/*
		System.out.println("etap 3");*/
		List<String> list = new ArrayList<String>();
		/*System.out.println(st);*/
		String s = st.replace("\n", ",");
		/*System.out.println(s);*/
		String  string_email_data = s.replace(" ","");
		/*System.out.println(string_email_data);*/
		Collections.addAll(list , string_email_data.split(","));
		/*System.out.println(list);*/
		return list ;
	}

	public String arraylistToString(String st){
		String stri="";
		stri+=st+"\n";
		return stri ;
	}
	
	/* ---------------------------------------*/
	
	public int CheckForTestSave(Fct_email_data email_data) {
		System.out.println("etap 2");
		int x=0;
		List<String> list_email_data =  stringToArraylist(email_data.getEmail());
		for (String email : list_email_data) {
			System.out.println(" this mail ----- "+email);
			Fct_email_data is_email_data = findByEmail(email);
			if(is_email_data != null) {
				x = -1;
			}else {
				Fct_email_data  email_data2 = new Fct_email_data();
				email_data2.setEmail(email);
				email_dataDao.save(email_data2);
				x = 1;
			}
		}
		return x;

	}

	public int saveMoreMail(Fct_email_data email_data) {
		System.out.println("etap 2");
		List<String> list_email_data =  stringToArraylist(email_data.getEmail());
		int x = list_email_data.size();
		int y = 0;
		System.out.println(x);
		for (String email : list_email_data) {/*
			System.out.println(" this mail ----- "+email);*/
			Fct_email_data is_email_data = findByEmail(email);
			if(is_email_data != null) {
				System.out.println("----count email isExist x =  "+ x);
				x--;
			}else {
				Fct_email_data  email_data2 = new Fct_email_data();
				email_data2.setEmail(email);
				System.out.println("----count email y =  "+ y);
				y++;
				email_dataDao.save(email_data2);/*
				System.out.println("----test save--- "+ email_data2.getEmail());*/
			}
		}/*
		System.out.println("----test save number --- "+x);*/
		return y;

	}

	public DataCheck ckeckedTest(DataCheck data) {
		List<String> listDebut =  stringToArraylist(data.getEmail());
		data.setEmail(null);
		int taillStart = listDebut.size();
		
		String stri="";
		for (String email : listDebut) {/*
			System.out.println(" this mail ----- " + email);*/
			DataCheck is_email_data = findByEmailTest(email);
			if(is_email_data == null) {
				stri+=email+"\n";/*
				System.out.println("this is ligghhhhh ---> "+stri);*/
			}
		}
		
		List<String> listFin =  stringToArraylist(stri);
		int taillFin = listFin.size();
		data.setVersandCounte(taillFin);
		data.setPart(taillStart);
		data.setEmail(stri);
		return data;
	}
	
	/* ---------------------------------------*/

	public Fct_email_data ckecked(Fct_email_data datas) {
		List<String> listDebut =  stringToArraylist(datas.getEmail());
		Fct_email_data data = new Fct_email_data();
		int taillStart = listDebut.size();
		String stri = "";
		String nonNull = "";
		for (String email : listDebut) {/*
			System.out.println(" this mail ----- " + email);*/
			Fct_email_data is_email_data = findByEmail(email);
			if(is_email_data == null) {
				stri += email+"\n";/*
				System.out.println("this is ligghhhhh ---> "+stri);*/
			}
		}
		
		List<String> listFin =  stringToArraylist(stri);
		int taillFin = listFin.size();
		data.setVersandCounte(taillFin);
		data.setPart(taillStart);
		data.setEmail(stri);
/*
		System.out.println(" this mail 1 taillStart ----- " + taillStart);
		System.out.println(" this mail 2 taillFin ----- " + taillFin);*/
		return data;
	}
	
	public int save(Fct_email_data email_data) {
		Fct_email_data is_email_data = findByEmail(email_data.getEmail());
		Dim_country country = countryService.findByReference(email_data.getCt_id().getReference());
		Dim_email_state state = email_state.findByName(email_data.getState_id().getName());
		Dim_categorie cat = categorieService.findByName(email_data.getCat_id().getName());
		User user = userService.findByUsername(email_data.getUser_id().getUsername());
		if(is_email_data != null) {
			return -1;
		}if(email_data.getEmail() == null) {
			return -2;
		}else {
			SimpleDateFormat formater = null;

			Date aujourdhui = new Date();

			formater = new SimpleDateFormat("dd-MM-yyyy");/*
			System.out.println(formater.format(aujourdhui));*/

			email_data.setEmailDate(formater.format(aujourdhui));
			email_data.setCat_id(cat);
			email_data.setVersandCounte(1);
			email_data.setUser_id(user);
			email_data.setCt_id(country);
			email_data.setState_id(state);
			email_dataDao.save(email_data);
			return 1;
		}



	}

	public List<Fct_email_data> findAll() {
		return email_dataDao.findAll();
	}

	

	@Override
	public int save(List<String> lis_email_data, Dim_country country, Dim_email_state state, Dim_categorie cat, User user) {

		return 1;
	}
	public List<Fct_email_data> searshEmail(String ref) {
		List<Fct_email_data> emails = new ArrayList<Fct_email_data>();
		if(findByEmail(ref) != null) {
			emails.add(findByEmail(ref));
		}else if(findByStateIdName(ref) != null) {
			emails.add(findByStateIdName(ref));
		}else if(findByCatIdName(ref) != null) {
			emails.add(findByCatIdName(ref));
		}else if(findByFirmaName(ref) != null) {
			emails.add(findByFirmaName(ref));
		}else if(findByCtIdReference(ref) != null) {
			emails.add(findByCtIdReference(ref));
		}
		return emails;
	}
	
	public Fct_email_data findByFirmaName(String ref) {
		return email_dataDao.findByFirmaName(ref);
	}
	public Fct_email_data findByStateIdName(String ref) {
		return email_dataDao.findByStateIdName(ref);
	}
	public Fct_email_data findByCatIdName(String ref) {
		return email_dataDao.findByCatIdName(ref);
	}
	public Fct_email_data findByCtIdReference(String ref) {
		return email_dataDao.findByCtIdReference(ref);
	}

}
