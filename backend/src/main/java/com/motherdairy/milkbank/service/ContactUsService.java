package com.motherdairy.milkbank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.motherdairy.milkbank.model.ContactUs;
import com.motherdairy.milkbank.repository.ContactUsRepository;

@Service
public class ContactUsService {

    @Autowired
    private ContactUsRepository contactUsRepository;

    public ContactUs saveMessage(ContactUs message) {
        return contactUsRepository.save(message);
    }
    public List<ContactUs> getAllMessages() {
        return contactUsRepository.findAll();
    }
}
