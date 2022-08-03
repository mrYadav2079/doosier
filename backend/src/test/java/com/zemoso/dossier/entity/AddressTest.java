package com.zemoso.dossier.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AddressTest {

   @Test
    void addressDataGettingAndSetting(){
       Address address=new Address();
       address.setId(1);
       address.setCity("Los Angels");
       address.setCountry("America");
       address.setLandmark("Beside Walmart");
       address.setState("California");
       User user=new User();
       user.setId("1");
       address.setUser(user);
       address.setStreet("Oxford Street");
       assertEquals(1,address.getId());
       assertEquals("Los Angels",address.getCity());
       assertEquals("America",address.getCountry());
       assertEquals("Beside Walmart",address.getLandmark());
       assertEquals("California",address.getState());
       assertEquals("1",address.getUser().getId());
       assertEquals("Oxford Street",address.getStreet());

   }
}