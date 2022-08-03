package com.zemoso.dossier.entity;

import org.junit.jupiter.api.Test;

import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioImageTest {

    @Test
    void portfolioImageGetterSetterTest() throws SQLException {
        PortfolioImage portfolioImage=new PortfolioImage();
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);
        portfolioImage.setPortfolio(portfolio);
        portfolioImage.setId(1);
        assertEquals(1,portfolioImage.getPortfolio().getId());
        assertEquals(1,portfolioImage.getId());

    }
}