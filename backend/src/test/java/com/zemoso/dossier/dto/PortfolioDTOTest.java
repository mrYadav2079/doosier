package com.zemoso.dossier.dto;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioDTOTest {

    @Test
    void portfolioDTOTest() {
        PortfolioDTO portfolio=new PortfolioDTO();
        portfolio.setId(1);
        portfolio.setPortfolioLink("www.dossier.com");
        portfolio.setPortfolioName("Peter Parker");
        UserDTO user=new UserDTO();
        user.setId("1");
        portfolio.setUser(user);
        PortfolioSlideDTO portfolioSlide=new PortfolioSlideDTO();
        portfolioSlide.setId(1);
        List<PortfolioSlideDTO> portfolioSlidesList=new ArrayList<>();
        portfolioSlidesList.add(portfolioSlide);
        PortfolioImageDTO portfolioImage=new PortfolioImageDTO();
        portfolioImage.setId(1);
        List<PortfolioImageDTO> portfolioImageList=new ArrayList<>();
        portfolioImageList.add(portfolioImage);
        PortfolioExtensionDTO portfolioExtension=new PortfolioExtensionDTO();
        portfolioExtension.setId(1);
        List<PortfolioExtensionDTO> portfolioExtensionList=new ArrayList<>();
        portfolioExtensionList.add(portfolioExtension);
        portfolio.setFileName("resume");
        assertEquals(1,portfolio.getId());
        assertEquals("www.dossier.com",portfolio.getPortfolioLink());
        assertEquals("Peter Parker",portfolio.getPortfolioName());
        assertEquals("1",portfolio.getUser().getId());
        assertEquals("resume",portfolio.getFileName());

    }
}