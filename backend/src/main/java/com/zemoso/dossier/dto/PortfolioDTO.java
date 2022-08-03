package com.zemoso.dossier.dto;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class PortfolioDTO {
    private int id;
    String portfolioName;
    String fileName;
    String portfolioLink;
    private UserDTO user;
    List<PortfolioExtensionDTO> portfolioExtensionDTOS=new ArrayList<>();


}
