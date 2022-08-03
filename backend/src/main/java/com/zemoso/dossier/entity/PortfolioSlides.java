package com.zemoso.dossier.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table(name="portfolio_slides")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class PortfolioSlides {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    String slideName;

    @Column(name = "content")
    Blob slideContent;

    @ManyToOne
    Portfolio portfolio;

    @Override
    public String toString() {
        return "PortfolioSlides{" +
                "id=" + id +
                ", slideName='" + slideName + '\'' +
                ", slideContent=" + slideContent +
                '}';
    }
}
