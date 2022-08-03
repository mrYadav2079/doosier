package com.zemoso.dossier.entity;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class PortfolioTest {

    @Test
    void portfolioGetAndSetData() {
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);
        portfolio.setPortfolioLink("www.dossier.com");
        portfolio.setPortfolioName("Peter Parker");
        User user=new User();
        user.setId("1");
        portfolio.setUser(user);
        portfolio.setFileName("resume");
        PortfolioSlides portfolioSlide=new PortfolioSlides();
        portfolioSlide.setId(1);
        List<PortfolioSlides> portfolioSlidesList=new ArrayList<>();
        portfolioSlidesList.add(portfolioSlide);
        PortfolioImage portfolioImage=new PortfolioImage();
        portfolioImage.setId(1);
        List<PortfolioImage> portfolioImageList=new ArrayList<>();
        portfolioImageList.add(portfolioImage);
        PortfolioExtension portfolioExtension=new PortfolioExtension();
        portfolioExtension.setId(1);
        List<PortfolioExtension> portfolioExtensionList=new ArrayList<>();
        portfolioExtensionList.add(portfolioExtension);
        portfolio.setPortfolioSlidesList(portfolioSlidesList);
        portfolio.setPortfolioExtensionList(portfolioExtensionList);
        portfolio.setPortfolioImageList(portfolioImageList);
        assertEquals(1,portfolio.getId());
        assertEquals("www.dossier.com",portfolio.getPortfolioLink());
        assertEquals("Peter Parker",portfolio.getPortfolioName());
        assertEquals("1",portfolio.getUser().getId());
        assertEquals("resume",portfolio.getFileName());
        assertEquals(1,portfolio.getPortfolioExtensionList().get(0).getId());
        assertEquals(1,portfolio.getPortfolioSlidesList().get(0).getId());
        assertEquals(1,portfolio.getPortfolioImageList().get(0).getId());
    }
}