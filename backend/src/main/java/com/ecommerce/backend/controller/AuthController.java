package com.ecommerce.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.dto.AuthResponse;
import com.ecommerce.backend.model.User;
import com.ecommerce.backend.security.JwtUtil;
import com.ecommerce.backend.service.AuthService;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    
    @Autowired
    private AuthService service;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public AuthResponse  login(@RequestBody User user) {
        User existing = service.login(user.getEmail(),user.getPassword());
        if(existing != null) {
            String token = jwtUtil.generateToken(existing.getEmail());
            return new AuthResponse(token, existing.getRole());
        }
        throw new RuntimeException("Invalid Login");
    }
    
    
}
