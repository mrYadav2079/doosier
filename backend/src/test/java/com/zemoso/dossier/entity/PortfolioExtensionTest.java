package com.zemoso.dossier.entity;

import org.junit.jupiter.api.Test;

import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioExtensionTest {




    @Test
    void portfolioExtensionsGetAndSetData() throws SQLException  {
        PortfolioExtension portfolioExtension=new PortfolioExtension();
        portfolioExtension.setId(1);
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);
        portfolioExtension.setPortfolio(portfolio);
        assertEquals(1,portfolioExtension.getPortfolio().getId());
        assertEquals(1,portfolioExtension.getId());


    }
}