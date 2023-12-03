package com.webapp.authentication.repository;

import org.springframework.stereotype.Repository;

import com.webapp.authentication.model.User;

@Repository
public class UserRepositoryNew {
    public User findUserByEmail(String email){
        User user = new User(email,"123456");
        user.setFirstName("FirstName");
        user.setLastName("LastName");
        return user;
    }
}
