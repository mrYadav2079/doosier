package com.zemoso.dossier.dto;

import lombok.*;

import java.sql.Blob;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class UserProfileDTO {

    private int id;

    private String firstName;

    private String lastName;

    private int age;

    private long mobileNumber;

    private String gender;

    private Blob profileImage;

    private UserDTO user;
}
