package com.zemoso.dossier.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PortfolioExtensionDTOTest {

    @Test
    void portfolioExtensionDTOTest() {
        PortfolioExtensionDTO portfolioExtensionDTO=new PortfolioExtensionDTO();
        portfolioExtensionDTO.setId(1);
        PortfolioDTO portfolioDTO=new PortfolioDTO();
        portfolioDTO.setId(1);
        portfolioExtensionDTO.setPortfolio(portfolioDTO);
        assertEquals(1,portfolioExtensionDTO.getId());
        assertEquals(1,portfolioExtensionDTO.getPortfolio().getId());
    }
}