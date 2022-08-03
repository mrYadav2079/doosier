package com.zemoso.dossier.entity;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name="portfolio_extensions")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class PortfolioExtension  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "extensions")
    String extensions;

    @ManyToOne
    private Portfolio portfolio;

    @Override
    public String toString() {
        return "PortfolioExtension{" +
                "id=" + id +
                ", extensions=" + extensions +
                '}';
    }
}
