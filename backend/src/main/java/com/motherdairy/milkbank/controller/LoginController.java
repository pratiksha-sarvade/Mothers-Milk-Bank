package com.motherdairy.milkbank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.motherdairy.milkbank.service.LoginService;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")  
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    // ✅ Login - returns message + user name if successful
    @PostMapping
    public ResponseEntity<Map<String, String>> login(@RequestParam String email,
                                                     @RequestParam String password) {
        Map<String, String> result = loginService.login(email, password);
        return ResponseEntity.ok(result);
    }

    // ✅ Forgot Password - returns message
    @PostMapping("/forgot-password")
    public ResponseEntity<Map<String, String>> forgotPassword(@RequestParam String email) {
        Map<String, String> result = loginService.forgotPassword(email);
        return ResponseEntity.ok(result);
    }
}
