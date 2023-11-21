package com.webapp.authentication.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Object> createUser(@RequestBody UserEntity userData) {

        // String hash = Hashing.sha256().hashString(userData.getPassword(), Charsets.UTF_8).toString();
        // userService.create(userData, hash);
        // return ResponseEntity.ok().body(Map.of("success", true, "message", "Registered Successfully"));
    }
}
