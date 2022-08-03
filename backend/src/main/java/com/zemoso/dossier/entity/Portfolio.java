package com.zemoso.dossier.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name="portfolio")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    String portfolioName;
    @Column(name = "file_name")
    String fileName;
    @Column(name = "portfolio_link")
    String portfolioLink;
    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "portfolio",cascade = CascadeType.ALL)
    List<PortfolioSlides> portfolioSlidesList;

    @OneToMany(mappedBy = "portfolio",cascade = CascadeType.ALL)
    List<PortfolioImage> portfolioImageList;

    @OneToMany(mappedBy = "portfolio",cascade = CascadeType.ALL)
    List<PortfolioExtension> portfolioExtensionList;

//    public void setPortfolioSlidesList(final List<PortfolioSlides> portfolioSlidesList) {
//        if( this.portfolioSlidesList == null)
//            this.portfolioSlidesList=new ArrayList<>();
//        portfolioSlidesList.forEach(portfolioSlides -> portfolioSlides.setPortfolio(this));
//        this.portfolioSlidesList = portfolioSlidesList;
//    }
//
//    public void setPortfolioImageList(final List<PortfolioImage> portfolioImageList) {
//        if( this.portfolioImageList == null)
//            this.portfolioImageList=new ArrayList<>();
//        portfolioImageList.forEach(portfolioImage -> portfolioImage.setPortfolio(this));
//        this.portfolioImageList = portfolioImageList;
//    }
//
//    public void setPortfolioExtensionList(final List<PortfolioExtension> portfolioExtensionList) {
//        if( this.portfolioExtensionList == null)
//            this.portfolioExtensionList=new ArrayList<>();
//        portfolioExtensionList.forEach(portfolioExtension -> portfolioExtension.setPortfolio(this));
//        this.portfolioExtensionList = portfolioExtensionList;
//    }

    @Override
    public String toString() {
        return "Portfolio{" +
                "id=" + id +
                ", portfolioName='" + portfolioName + '\'' +
                ", fileName='" + fileName + '\'' +
                ", portfolioLink='" + portfolioLink + '\'' +
                ", portfolioSlidesList=" + portfolioSlidesList +
                ", portfolioImageList=" + portfolioImageList +
                ", portfolioExtensionList=" + portfolioExtensionList +
                '}';
    }
}
