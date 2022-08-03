package com.zemoso.dossier.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.sql.Blob;


@Entity
@Table(name="portfolio_images")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class PortfolioImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "imagescontent")
    Blob imagesContent;

    @ManyToOne
    private Portfolio portfolio;

    @Override
    public String toString() {
        return "PortfolioImage{" +
                "id=" + id +
                ", imagesContent=" + imagesContent +
                '}';
    }
}
