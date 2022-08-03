package com.zemoso.dossier.entity;

import lombok.*;

import java.sql.Blob;
import javax.persistence.*;

@Entity
@Table(name = "user_profile")
@Getter@Setter@NoArgsConstructor@AllArgsConstructor@ToString
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="age")
    private int age;

    @Column(name="mobile")
    private long mobileNumber;

    @Column(name="gender")
    private String gender;

    @Column(name="profile_image")
    private Blob profileImage;

    @ManyToOne
    private User user;

    @Override
    public String toString() {
        return "UserProfile{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", mobileNumber=" + mobileNumber +
                ", gender='" + gender + '\'' +
                ", profileImage=" + profileImage +
                '}';
    }
}
