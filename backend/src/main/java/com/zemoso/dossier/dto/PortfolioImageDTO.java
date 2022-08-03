package com.zemoso.dossier.dto;

import lombok.*;

import java.sql.Blob;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PortfolioImageDTO {
    private int id;
    Blob imagesContent;
    private PortfolioDTO portfolio;
}
