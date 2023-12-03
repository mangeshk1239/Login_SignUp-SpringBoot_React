package com.webapp.authentication.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.webapp.authentication.model.User;
import com.webapp.authentication.repository.UserRepositoryNew;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepositoryNew userRepositoryNew;
    public CustomUserDetailsService(UserRepositoryNew userRepositoryNew) {
        this.userRepositoryNew = userRepositoryNew;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepositoryNew.findUserByEmail(email);
        List<String> roles = new ArrayList<>();
        roles.add("USER");
        UserDetails userDetails =
                org.springframework.security.core.userdetails.User.builder()
                        .username(user.getEmail())
                        .password(user.getPassword())
                        .roles(roles.toArray(new String[0]))
                        .build();
        return userDetails;
    }
}
