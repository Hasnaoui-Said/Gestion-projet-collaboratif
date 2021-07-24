
package uninfz.ifrozet.ma.beans;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class DataCheck  implements Serializable{

    private static final long serialVersionUID = 1L;
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long email_id;

    private String email;
    private String phone;
    private String firmaName;
    private String codePost;
    private String city;
    private String bundesland;
    private String emailDate;
    private String changeDate;
    private Date versandDate;
    private String versandArt;
    private int versandCounte;
    private int part;



    @ManyToOne
    private User userId;
    @ManyToOne
    private Dim_email_state stateId;
    @ManyToOne
    private Dim_categorie catId;
    @ManyToOne
    private Dim_country ctId;

    public DataCheck() {

    }

    public String getChangeDate() {
        return changeDate;
    }
    public void setChangeDate(String changeDate) {
        this.changeDate = changeDate;
    }
    public String getEmailDate() {
        return emailDate;
    }
    public void setEmailDate(String string) {
        this.emailDate = string;
    }
    public long getEmail_id() {
        return email_id;
    }
    public void setEmail_id(long email_id) {
        this.email_id = email_id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public User getUser_id() {
        return userId;
    }
    public void setUser_id(User user_id) {
        this.userId = user_id;
    }
    public Dim_email_state getState_id() {
        return stateId;
    }
    public void setState_id(Dim_email_state state_id) {
        this.stateId = state_id;
    }

    public Dim_categorie getCat_id() {
        return catId;
    }
    public void setCat_id(Dim_categorie cat_id) {
        this.catId = cat_id;
    }
    public Dim_country getCt_id() {
        return ctId;
    }
    public void setCt_id(Dim_country ct_id) {
        this.ctId = ct_id;
    }

    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getFirmaName() {
        return firmaName;
    }
    public void setFirmaName(String firmaName) {
        this.firmaName = firmaName;
    }
    public String getCodePost() {
        return codePost;
    }
    public void setCodePost(String codePost) {
        this.codePost = codePost;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getBundesland() {
        return bundesland;
    }
    public void setBundesland(String bundesland) {
        this.bundesland = bundesland;
    }

    public Date getVersandDate() {
        return versandDate;
    }
    public void setVersandDate(Date versandDate) {
        this.versandDate = versandDate;
    }
    public String getVersandArt() {
        return versandArt;
    }
    public void setVersandArt(String versandArt) {
        this.versandArt = versandArt;
    }
    public int getVersandCounte() {
        return versandCounte;
    }
    public void setVersandCounte(int versandCounte) {
        this.versandCounte = versandCounte;
    }
    public int getPart() {
        return part;
    }
    public void setPart(int part) {
        this.part = part;
    }
    public User getUserId() {
        return userId;
    }
    public void setUserId(User userId) {
        this.userId = userId;
    }
    public Dim_email_state getStateId() {
        return stateId;
    }
    public void setStateId(Dim_email_state stateId) {
        this.stateId = stateId;
    }
    public Dim_categorie getCatId() {
        return catId;
    }
    public void setCatId(Dim_categorie catId) {
        this.catId = catId;
    }
    public Dim_country getCtId() {
        return ctId;
    }
    public void setCtId(Dim_country ctId) {
        this.ctId = ctId;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + (int) (email_id ^ (email_id >>> 32));
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
        DataCheck other = (DataCheck) obj;
        if (email_id != other.email_id)
            return false;
        return true;
    }




}