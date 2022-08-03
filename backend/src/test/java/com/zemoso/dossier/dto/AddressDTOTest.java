package com.zemoso.dossier.dto;

import com.zemoso.dossier.entity.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AddressDTOTest {

    @Test
    void addressDTOGetterSetterTest() {
        AddressDTO address=new AddressDTO();
        address.setId(1);
        address.setCity("Los Angels");
        address.setCountry("America");
        address.setLandmark("Beside Walmart");
        address.setState("California");
        UserDTO user=new UserDTO();
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