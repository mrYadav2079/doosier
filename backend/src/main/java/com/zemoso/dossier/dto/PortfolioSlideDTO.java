package com.zemoso.dossier.dto;

import lombok.*;

import java.sql.Blob;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class PortfolioSlideDTO {
    private int id;
    String slideName;
    Blob content;
    private PortfolioDTO portfolio;
}
