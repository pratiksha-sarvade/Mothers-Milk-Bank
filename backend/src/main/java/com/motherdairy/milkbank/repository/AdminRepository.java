package com.motherdairy.milkbank.repository;
import com.motherdairy.milkbank.model.SignupUser;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
public interface AdminRepository extends JpaRepository<SignupUser, Long> {
    Optional<SignupUser> findByEmail(String email);
}