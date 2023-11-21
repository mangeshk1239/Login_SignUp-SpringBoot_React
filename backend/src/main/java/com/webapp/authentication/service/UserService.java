package com.webapp.authentication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.authentication.model.UserEntity;
import com.webapp.authentication.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public void create(UserEntity userData, String hash) {
        userRepository.create(userData, hash);
    }

    public Boolean exists(String userEmail) {
        return userRepository.exists(userEmail);
    }

    public Boolean valid(String userPassword) {
        return userRepository.valid(userPassword);
    }
}
