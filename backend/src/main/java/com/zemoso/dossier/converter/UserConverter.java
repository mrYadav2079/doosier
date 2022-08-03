package com.zemoso.dossier.converter;

import com.zemoso.dossier.dto.UserDTO;
import com.zemoso.dossier.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {

    private final ModelMapper mapper = new ModelMapper();

    public User dtoToEntity(UserDTO userDTO){
        return mapper.map(userDTO, User.class);
    }

    public UserDTO entityToDto(User user) {
        return mapper.map(user, UserDTO.class);
    }
}
