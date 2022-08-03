package com.zemoso.dossier.dto;

import lombok.*;
@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class AddressDTO {
    private int id;
    String street;
    String landmark;
    String city;
    String state;
    String country;
    private UserDTO user;

}
