package com.zemoso.dossier.entity;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    void userGetterSetterTest() {
        User user=new User();
        UserPreferences userPreferences=new UserPreferences();
        userPreferences.setColor("Orange");
        List<UserPreferences> userPreferencesList=new ArrayList<>();
        userPreferencesList.add(userPreferences);
        Address address=new Address();
        address.setId(1);
        List<Address> addressList=new ArrayList<>();
        addressList.add(address);
        UserProfile userProfile=new UserProfile();
        userProfile.setId(1);
        List<UserProfile> userProfileList=new ArrayList<>();
        userProfileList.add(userProfile);
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);
        List<Portfolio> userPortfolioList=new ArrayList<>();
        userPortfolioList.add(portfolio);
        user.setId("1");
        user.setCreated("Created");
        user.setEmailId("peterparker@gmail.com");
        user.setIsActive(1);
        user.setPassword("Peter@1234");
        user.setIsExpired(0);
        user.setUpdated("Peter Parker");
        user.setUserPreferencesList(userPreferencesList);
        user.setAddressList(addressList);
        user.setUserProfileList(userProfileList);
        user.setPortfolioList(userPortfolioList);
        assertEquals("1",user.getId());
        assertEquals("Created",user.getCreated());
        assertEquals("peterparker@gmail.com",user.getEmailId());
        assertEquals("Peter@1234",user.getPassword());
        assertEquals(1,user.getIsActive());
        assertEquals(0,user.getIsExpired());
        assertEquals("Peter Parker",user.getUpdated());
        assertEquals(1,user.getAddressList().get(0).getId());
        assertEquals("Orange",user.getUserPreferencesList().get(0).getColor());
        assertEquals(1,user.getUserProfileList().get(0).getId());
        assertEquals(1,user.getPortfolioList().get(0).getId());
    }
}