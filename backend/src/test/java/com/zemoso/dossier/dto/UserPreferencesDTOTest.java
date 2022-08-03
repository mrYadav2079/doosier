package com.zemoso.dossier.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserPreferencesDTOTest {

    @Test
    void userPreferencesDTOTest() {
        UserPreferencesDTO userPreferences=new UserPreferencesDTO();
        userPreferences.setColor("Black");
        userPreferences.setDesignation("Project Manager");
        userPreferences.setIndustry("IT");
        userPreferences.setPortfolioType("Fintech");
        userPreferences.setExperience("0-10yrs");
        UserDTO user=new UserDTO();
        user.setId("1");
        userPreferences.setUser(user);
        assertEquals("Black",userPreferences.getColor());
        assertEquals("Project Manager",userPreferences.getDesignation());
        assertEquals("IT",userPreferences.getIndustry());
        assertEquals("Fintech",userPreferences.getPortfolioType());
        assertEquals("1",userPreferences.getUser().getId());
        assertEquals("0-10yrs",userPreferences.getExperience());

    }
}