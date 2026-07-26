package com.motherdairy.milkbank;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.motherdairy.milkbank")
public class MilkBankApplication {
    public static void main(String[] args) {
        SpringApplication.run(MilkBankApplication.class, args);
    }
}
