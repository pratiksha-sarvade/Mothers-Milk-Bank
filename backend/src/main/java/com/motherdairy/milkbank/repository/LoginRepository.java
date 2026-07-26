package com.motherdairy.milkbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.motherdairy.milkbank.model.SignupUser;

import java.util.Optional;

public interface LoginRepository extends JpaRepository<SignupUser, Long> {
    Optional<SignupUser> findByEmail(String email);
}