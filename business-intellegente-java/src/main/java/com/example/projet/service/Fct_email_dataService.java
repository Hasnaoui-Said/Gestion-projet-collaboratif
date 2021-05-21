package com.example.projet.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projet.beans.Dim_categorie;
import com.example.projet.beans.Dim_country;
import com.example.projet.beans.Dim_email_state;
import com.example.projet.beans.Dim_user;
import com.example.projet.beans.Fct_email_data;
import com.example.projet.dao.Fct_email_dataDao;
import com.example.projet.vo.Fct_email_dataVo;

@Service
public class Fct_email_dataService implements Fct_email_dataVo {

	@Autowired
	private Fct_email_dataDao email_dataDao ;
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

	public int deleteByEmail(String ref) {
		return email_dataDao.deleteByEmail(ref);
	}

	public List<String> stringToArraylist(String st){
		List<String> list = new ArrayList<String>();
		System.out.println(st);
		String s = st.replace("\n", ",");
		System.out.println(s);
		String  string_email_data = s.replace(" ","");
		System.out.println(string_email_data);
		Collections.addAll(list , string_email_data.split(","));
		System.out.println(list);
		return list ;
	}

	public String arraylistToString(String st){
		String stri="";
		stri+=st+"\n";
		return stri ;
	}
	/*
	public int save(Fct_email_data email_data) {
		Dim_country country = countryService.findByReference(email_data.getCt_id().getReference());
		Dim_email_state state = email_state.findByName(email_data.getState_id().getName());
		Dim_categorie cat = categorieService.findByName(email_data.getCat_id().getName());
		Dim_user user = userService.findByReference(email_data.getUser_id().getReference());
		int x=0;
		List<String> list_email_data =  stringToArraylist(email_data.getEmail());
		for (String email : list_email_data) {
			System.out.println(" this mail ----- "+email);
			Fct_email_data is_email_data = findByEmail(email);
			if(is_email_data != null) {
				x = -1;
			}else if(country == null && state == null && cat == null && user == null ) {
				return -2;
			}else {
				//SimpleDateFormat formater = new SimpleDateFormat("dd-MM-yy");
			    //System.out.println(formater.format(email_data.getEmailDate()));
				Fct_email_data  email_data2 = new Fct_email_data();
				email_data2.setEmail(email);
				email_data2.setCat_id(cat);
				email_data2.setUser_id(user);
				email_data2.setCt_id(country);
				email_data2.setState_id(state);
				email_dataDao.save(email_data2);
				x = 1;
			}
		}
		return x;

	}*/

	public Fct_email_data ckecked(Fct_email_data data) {
		List<String> listDebut =  stringToArraylist(data.getEmail());
		data.setEmail(null);
		int taillStart = listDebut.size();
		
		String stri="";
		for (String email : listDebut) {
			System.out.println(" this mail ----- " + email);
			Fct_email_data is_email_data = findByEmail(email);
			if(is_email_data == null) {
				stri+=email+"\n";
				System.out.println("this is ligghhhhh ---> "+stri);
			}
		}
		
		List<String> listFin =  stringToArraylist(stri);
		int taillFin = listFin.size();
		data.setVersandCounte(taillFin);
		data.setPart(taillStart);
		data.setEmail(stri);
		return data;
	}
	
	public int save(Fct_email_data email_data) {
		Fct_email_data is_email_data = findByEmail(email_data.getEmail());
		Dim_country country = countryService.findByReference(email_data.getCt_id().getReference());
		Dim_email_state state = email_state.findByName(email_data.getState_id().getName());
		Dim_categorie cat = categorieService.findByName(email_data.getCat_id().getName());
		Dim_user user = userService.findByReference(email_data.getUser_id().getReference());
		if(is_email_data != null) {
			return -1;
		}if(email_data.getEmail() == null) {
			return -2;
		}else {
			SimpleDateFormat formater = null;

			Date aujourdhui = new Date();

			formater = new SimpleDateFormat("dd-MM-yyyy");
			System.out.println(formater.format(aujourdhui));

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

	public Fct_email_data getOne(Long id) {
		return email_dataDao.getOne(id);
	}

	@Override
	public int save(List<String> lis_email_data, Dim_country country, Dim_email_state state, Dim_categorie cat, Dim_user user) {

		return 1;
	}

}
