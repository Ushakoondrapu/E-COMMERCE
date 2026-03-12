package com.ecommerce.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.User;
import com.ecommerce.backend.repository.UserRepository;

@Service
public class AuthService {
    
    @Autowired
    public UserRepository repo;

    public User register(User user) {
        if(user.getRole() == null) {
        user.setRole("USER");
    }
        return repo.save(user);
    }

    public User login(String email, String password) {
        User user = repo.findByEmail(email);

        if(user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
