package com.zemoso.dossier.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="user")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name = "password")
    private String password;

    @Column(name = "email_id")
    private String emailId;

    @Column(name = "is_active")
    private int isActive;

    @Column(name = "is_expired")
    private int isExpired;

    @Column(name = "created")
    private String created;

    @Column(name = "updated")
    private String updated;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    List<UserPreferences> userPreferencesList;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    List<Address> addressList;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    List<UserProfile> userProfileList;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    List<Portfolio> portfolioList;

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", password='" + password + '\'' +
                ", emailId='" + emailId + '\'' +
                ", isActive=" + isActive +
                ", isExpired=" + isExpired +
                ", created='" + created + '\'' +
                ", updated='" + updated + '\'' +
                ", userPreferencesList=" + userPreferencesList +
                ", addressList=" + addressList +
                ", userProfileList=" + userProfileList +
                ", portfolioList=" + portfolioList +
                '}';
    }
}
