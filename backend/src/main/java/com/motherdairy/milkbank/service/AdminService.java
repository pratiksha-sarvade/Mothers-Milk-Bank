package com.motherdairy.milkbank.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.motherdairy.milkbank.repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public String login(String email, String password) {
        return adminRepository.findByEmail(email)
            .map(user -> user.getPassword().equals(password) ? "Login Successful" : "Incorrect credentials")
            .orElse("Incorrect credentials");
    }

    public String forgotPassword(String email) {
        return adminRepository.findByEmail(email).isPresent()
            ? "Reset link sent to your email"
            : "Email not found";
    }
}