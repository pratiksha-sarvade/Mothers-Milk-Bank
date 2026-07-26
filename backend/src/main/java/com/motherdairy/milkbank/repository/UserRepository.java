package com.motherdairy.milkbank.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.motherdairy.milkbank.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
