package com.motherdairy.milkbank.controller;

import com.motherdairy.milkbank.service.MilkInventoryService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin("*") // allow frontend calls
public class MilkInventoryController {

    private final MilkInventoryService service;

    public MilkInventoryController(MilkInventoryService service) {
        this.service = service;
    }

    @GetMapping("/inventory")
    public Map<String, Object> getInventory() {
        return service.getInventoryDetails();
    }
}
