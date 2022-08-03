package com.zemoso.dossier.dto;

import com.zemoso.dossier.entity.Address;
import com.zemoso.dossier.entity.Portfolio;
import com.zemoso.dossier.entity.UserPreferences;
import com.zemoso.dossier.entity.UserProfile;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class UserDTOTest {

    @Test
    void userDTOTest() {
        UserDTO user=new UserDTO();
        user.setId("1");
        user.setCreated("Created");
        user.setEmailId("peterparker@gmail.com");
        user.setIsActive(1);
        user.setPassword("Peter@1234");
        user.setIsExpired(0);
        user.setUpdated("Peter Parker");
        UserPreferencesDTO userPreferences=new UserPreferencesDTO();
        userPreferences.setColor("Orange");
        List<UserPreferencesDTO> userPreferencesList=new ArrayList<>();
        userPreferencesList.add(userPreferences);
        AddressDTO address=new AddressDTO();
        address.setId(1);
        List<AddressDTO> addressList=new ArrayList<>();
        addressList.add(address);
        UserProfileDTO userProfile=new UserProfileDTO();
        userProfile.setId(1);
        List<UserProfileDTO> userProfileList=new ArrayList<>();
        userProfileList.add(userProfile);
        PortfolioDTO portfolio=new PortfolioDTO();
        portfolio.setId(1);
        List<PortfolioDTO> userPortfolioList=new ArrayList<>();
        userPortfolioList.add(portfolio);
        user.setUserPreferencesDTOSList(userPreferencesList);
        user.setAddressDTOSList(addressList);
        user.setUserProfileDTOSList(userProfileList);
        user.setPortfolioDTOSList(userPortfolioList);
        assertEquals("1",user.getId());
        assertEquals("Created",user.getCreated());
        assertEquals("peterparker@gmail.com",user.getEmailId());
        assertEquals("Peter@1234",user.getPassword());
        assertEquals(1,user.getIsActive());
        assertEquals(0,user.getIsExpired());
        assertEquals("Peter Parker",user.getUpdated());
        assertEquals(1,user.getAddressDTOSList().get(0).getId());
        assertEquals("Orange",user.getUserPreferencesDTOSList().get(0).getColor());
        assertEquals(1,user.getUserProfileDTOSList().get(0).getId());
        assertEquals(1,user.getPortfolioDTOSList().get(0).getId());
    }
}