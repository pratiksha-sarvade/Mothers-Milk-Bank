package com.motherdairy.milkbank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.motherdairy.milkbank.model.SignupUser;
import com.motherdairy.milkbank.repository.LoginRepository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Map<String, String> login(String email, String password) {
        Optional<SignupUser> optionalUser = loginRepository.findByEmail(email);
        Map<String, String> response = new HashMap<>();

        if (optionalUser.isPresent()) {
            SignupUser user = optionalUser.get();
            if (user.getPassword().equals(password)) {
                response.put("message", "Login Successful");
                response.put("name", user.getName()); 
            } else {
                response.put("message", "Incorrect credentials");
            }
        } else {
            response.put("message", "Incorrect credentials");
        }

        return response;
    }

    public Map<String, String> forgotPassword(String email) {
        Map<String, String> response = new HashMap<>();
        if (loginRepository.findByEmail(email).isPresent()) {
            response.put("message", "Reset link sent to your email");
        } else {
            response.put("message", "Email not found");
        }
        return response;
    }
}
