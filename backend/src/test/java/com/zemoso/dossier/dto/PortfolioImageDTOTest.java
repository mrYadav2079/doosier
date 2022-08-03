package com.zemoso.dossier.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PortfolioImageDTOTest {

    @Test
    void portfolioImageDTOTest() {
        PortfolioImageDTO portfolioImageDTO=new PortfolioImageDTO();
        portfolioImageDTO.setId(1);
        PortfolioDTO portfolioDTO=new PortfolioDTO();
        portfolioDTO.setId(1);
        portfolioImageDTO.setPortfolio(portfolioDTO);
        assertEquals(1,portfolioImageDTO.getId());
        assertEquals(1,portfolioImageDTO.getPortfolio().getId());
    }
}