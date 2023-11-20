package com.webapp.authentication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.webapp.authentication.model.UserEntity;
import com.webapp.authentication.service.UserService;

@Controller
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/create")
    public void createUser(@RequestBody UserEntity userData) {
        String password = userData.getPassword();
        System.out.println(password);
        
        // userService.create(userData);
    }
}
