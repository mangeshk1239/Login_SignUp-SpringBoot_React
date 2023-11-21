package com.webapp.authentication.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.webapp.authentication.model.UserEntity;

@Repository
public class UserRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public void create(UserEntity userData, String hash) {
        String sql = 
        """
            INSERT INTO users
            (first_name, last_name, email, password)
            VALUES (?, ?, ?, ?)
        """;

        jdbcTemplate.update(
            sql,
            userData.getFirstName(),
            userData.getLastName(),
            userData.getEmail(),
            hash
        );
    }

}
