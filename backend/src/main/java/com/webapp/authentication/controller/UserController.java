package com.webapp.authentication.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.common.base.Charsets;
import com.google.common.hash.Hashing;
import com.webapp.authentication.model.UserEntity;
import com.webapp.authentication.security.JwtUtil;
import com.webapp.authentication.service.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/create")
    public ResponseEntity<Object> createUser(@RequestBody UserEntity userData) {

        Boolean userExists = userService.exists(userData.getEmail());
        if (userExists == true) return ResponseEntity.badRequest().body(Map.of("success", false, "message", "User already exits, try again..."));

        String hash = Hashing.sha256().hashString(userData.getPassword(), Charsets.UTF_8).toString();
        userService.create(userData, hash);

        return ResponseEntity.ok().body(Map.of("success", true, "message", "Registered Successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody UserEntity userData, HttpServletResponse response) {

        Boolean userExists = userService.exists(userData.getEmail());
        if (userExists == false) return ResponseEntity.badRequest().body(Map.of("success", false, "message", "Invalid Login credentials, please try again."));

        String hash = Hashing.sha256().hashString(userData.getPassword(), Charsets.UTF_8).toString();
        Boolean passwordValid = userService.valid(hash);
        if (passwordValid == false) return ResponseEntity.badRequest().body(Map.of("success", false, "message", "Invalid Login credentials, please try again."));

        String token = jwtUtil.createToken("user");

        Cookie cookie = new Cookie("token", token);
        cookie.setMaxAge(7 * 24 * 60 * 60);
        
        response.addCookie(cookie);

        return ResponseEntity.ok().body(Map.of("success", true, "message", "Login Successfully"));
    }

    @GetMapping("/get")
    public ResponseEntity<Object> getUser(@CookieValue(value = "token", required = false) String accessToken) {
        if (accessToken == null) return ResponseEntity.badRequest().body(Map.of("success", false, "message", "You are Unauthorized to access this page."));
        
        System.out.println(accessToken);
        return ResponseEntity.ok().body(Map.of("success", true, "message", "SUCCESS"));
    }

}
