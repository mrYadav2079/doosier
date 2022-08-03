package com.zemoso.dossier.dto;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import java.util.List;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class UserDTO {
    private String id;
    private String password;
    private String emailId;
    private int isActive;
    private int isExpired;
    private String created;
    private String updated;
//    @JsonManagedReference
    List<UserPreferencesDTO> userPreferencesDTOSList;
//    @JsonManagedReference
    List<AddressDTO> addressDTOSList;
//    @JsonManagedReference
    List<UserProfileDTO> userProfileDTOSList;
//    @JsonManagedReference
    List<PortfolioDTO> portfolioDTOSList;
}
