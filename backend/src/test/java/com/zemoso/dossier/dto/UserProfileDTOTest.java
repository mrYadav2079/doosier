package com.zemoso.dossier.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserProfileDTOTest {
    @Test
    void userProfileDTOTest() {
        UserProfileDTO userProfile=new UserProfileDTO();
        userProfile.setId(1);
        userProfile.setAge(21);
        userProfile.setGender("Male");
        userProfile.setFirstName("Peter");
        userProfile.setLastName("Parker");
        userProfile.setMobileNumber(123456789);
        UserDTO user=new UserDTO();
        user.setId("1");
        userProfile.setUser(user);
        assertEquals(1,userProfile.getId());
        assertEquals("Male",userProfile.getGender());
        assertEquals("Peter",userProfile.getFirstName());
        assertEquals("Parker",userProfile.getLastName());
        assertEquals(21,userProfile.getAge());
        assertEquals("1",userProfile.getUser().getId());
        assertEquals(123456789,userProfile.getMobileNumber());
    }
}