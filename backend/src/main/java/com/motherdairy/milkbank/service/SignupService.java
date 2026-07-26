package com.motherdairy.milkbank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.motherdairy.milkbank.model.SignupUser;
import com.motherdairy.milkbank.repository.SignupRepository;

@Service
public class SignupService {

    @Autowired
    private SignupRepository signupRepository;

    public String register(String name, String email, String password, String confirmPassword) {
        if (!password.equals(confirmPassword)) {
            return "Password and Confirm Password do not match";
        }

        if (signupRepository.findByEmail(email).isPresent()) {
            return "Email already registered";
        }

        SignupUser user = new SignupUser(name, email, password);
        signupRepository.save(user);
        return "Signup successful";
    }
}