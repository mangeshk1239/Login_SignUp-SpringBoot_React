package com.webapp.authentication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.common.base.Charsets;
import com.google.common.hash.Hashing;
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
        String hash = Hashing.sha256().hashString(password, Charsets.UTF_8).toString();
        System.out.println(hash);

        
        // userService.create(userData);
    }
}
