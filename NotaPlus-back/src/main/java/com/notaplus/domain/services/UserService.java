package com.notaplus.domain.services;

import com.notaplus.domain.entities.User;
import com.notaplus.domain.repositories.UserRepository;
import com.notaplus.domain.utils.dtos.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void createUser(UserDTO userDTO) throws Exception{
        Optional<User> existingUser = userRepository.findByDni(userDTO.getDni());

        if(existingUser.isPresent()){
            throw new Exception("Ya existe un usuario con el DNI: " + userDTO.getDni());
        }


    };

}
