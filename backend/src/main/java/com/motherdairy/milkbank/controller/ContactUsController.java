package com.motherdairy.milkbank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.motherdairy.milkbank.model.ContactUs;
import com.motherdairy.milkbank.service.ContactUsService;

@CrossOrigin
@RestController
@RequestMapping("/api/contact")
public class ContactUsController {

    @Autowired
    private ContactUsService contactUsService;

    @PostMapping("/send")
    public ContactUs saveMessage(@RequestBody ContactUs message) {
        return contactUsService.saveMessage(message);
    }
    
    @GetMapping("/all")
    public java.util.List<ContactUs> getAllMessages() {
        return contactUsService.getAllMessages();
    }
}
