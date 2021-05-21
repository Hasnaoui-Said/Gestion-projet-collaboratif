package com.example.projet.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
public class Dim_user  implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long user_id;
	private String reference;
	private String userName;
	private String email;
	private String firstName;
	@JsonFormat(pattern ="dd-mm-yyyy")
	private Date dateNassance;
	private String lastName;
	private String phone;
	private String ville;
	private String role;
	private String password;
	private String stateUser;//active or inactifs
	@ManyToOne
	private Dim_country ct_id;
	
	@OneToMany(mappedBy = "userId")
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<Cfg_user_role> roles = new ArrayList<Cfg_user_role>();
	
	public List<Cfg_user_role> getRoles() {
		return roles;
	}
	
	public Date getDateNassance() {
		return dateNassance;
	}

	public void setDateNassance(Date dateNassance) {
		this.dateNassance = dateNassance;
	}

	public void setRoles(List<Cfg_user_role> roles) {
		this.roles = roles;
	}
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	public long getUser_id() {
		return user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Dim_country getCt_id() {
		return ct_id;
	}
	public void setCt_id(Dim_country ct_id) {
		this.ct_id = ct_id;
	}
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getStateUser() {
		return stateUser;
	}
	public void setStateUser(String stateUser) {
		this.stateUser = stateUser;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (user_id ^ (user_id >>> 32));
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Dim_user other = (Dim_user) obj;
		if (user_id != other.user_id)
			return false;
		return true;
	}
	
	
}
