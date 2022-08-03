package com.zemoso.dossier.dto;

import lombok.*;

import java.sql.Blob;

@Getter @Setter  @AllArgsConstructor @NoArgsConstructor
public class PortfolioExtensionDTO {
    private int id;
    String extensions;
    private PortfolioDTO portfolio;

    @Override
    public String toString() {
        return "PortfolioExtensionDTO{" +
                "id=" + id +
                ", extensions=" + extensions +
                '}';
    }
}
