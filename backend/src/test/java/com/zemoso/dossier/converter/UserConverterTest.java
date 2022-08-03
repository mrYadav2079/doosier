package com.zemoso.dossier.converter;

import com.zemoso.dossier.dto.UserDTO;
import com.zemoso.dossier.entity.User;
import com.zemoso.dossier.entity.UserPreferences;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class UserConverterTest {

    @Test
    void dtoToEntity() {
        User user=new User();
        user.setId("1");
        UserDTO userDTO=new UserConverter().entityToDto(user);
        assertEquals("1",userDTO.getId());
    }

    @Test
    void entityToDto() {
        UserDTO userDTO=new UserDTO();
        userDTO.setId("1");
        User user=new UserConverter().dtoToEntity(userDTO);
        assertEquals("1",user.getId());
    }
}