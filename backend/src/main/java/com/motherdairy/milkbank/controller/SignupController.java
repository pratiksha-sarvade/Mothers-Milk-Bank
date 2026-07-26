package com.motherdairy.milkbank.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.motherdairy.milkbank.service.SignupService;

@RestController
@CrossOrigin
@RequestMapping("/api/signup")
public class SignupController {

    @Autowired
    private SignupService signupService;

    @PostMapping
    public ResponseEntity<Map<String, String>> signup(@RequestParam String name,
                                                      @RequestParam String email,
                                                      @RequestParam String password,
                                                      @RequestParam String confirmPassword) {
        String result = signupService.register(name, email, password, confirmPassword);

        Map<String, String> response = new HashMap<>();
        response.put("message", result);

        return ResponseEntity.ok(response);
    }
}
