package com.zemoso.dossier.dto;

import lombok.*;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class UserPreferencesDTO {
    private UserDTO user;
    String industry;
    String portfolioType;
    String experience;
    String color;
    String designation;
}
