package com.zemoso.dossier.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PortfolioSlideDTOTest {

    @Test
    void portfolioSlideDTOTest() {
        PortfolioSlideDTO portfolioSlideDTO=new PortfolioSlideDTO();
        portfolioSlideDTO.setId(1);
        PortfolioDTO portfolioDTO=new PortfolioDTO();
        portfolioDTO.setId(1);
        portfolioSlideDTO.setPortfolio(portfolioDTO);
        assertEquals(1,portfolioSlideDTO.getId());
        assertEquals(1,portfolioSlideDTO.getPortfolio().getId());

    }
}