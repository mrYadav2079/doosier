package com.zemoso.dossier.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PortfolioSlidesTest {

    @Test
    void portfolioSlidesGetterSetterTest() {
        PortfolioSlides portfolioSlides=new PortfolioSlides();
        portfolioSlides.setId(1);
        portfolioSlides.setSlideName("Awards");
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);
        portfolioSlides.setPortfolio(portfolio);
        assertEquals("Awards",portfolioSlides.getSlideName());
        assertEquals(1,portfolioSlides.getPortfolio().getId());
        assertEquals(1,portfolioSlides.getId());

    }
}