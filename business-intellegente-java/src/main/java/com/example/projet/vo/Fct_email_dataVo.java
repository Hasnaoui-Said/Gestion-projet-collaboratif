package com.example.projet.vo;

import java.util.List;

import com.example.projet.beans.Dim_categorie;
import com.example.projet.beans.Dim_country;
import com.example.projet.beans.Dim_email_state;
import com.example.projet.beans.Dim_user;

public interface Fct_email_dataVo {
	
	public int save(List<String>  lis_email_data,Dim_country country ,Dim_email_state state ,Dim_categorie cat ,Dim_user user);
}
