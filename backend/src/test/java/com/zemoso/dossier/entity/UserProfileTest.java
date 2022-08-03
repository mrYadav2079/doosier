package com.zemoso.dossier.entity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.sql.Blob;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.*;

class UserProfileTest {


    @Test
    void userProfileGetterSetterTest() throws SQLException {
        UserProfile userProfile=new UserProfile();
        userProfile.setId(1);
        userProfile.setAge(21);
        userProfile.setGender("Male");
        userProfile.setFirstName("Peter");
        userProfile.setLastName("Parker");
        userProfile.setMobileNumber(123456789);
        User user=new User();
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