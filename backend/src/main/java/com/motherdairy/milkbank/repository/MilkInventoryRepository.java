package com.motherdairy.milkbank.repository;

import com.motherdairy.milkbank.model.MilkInventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MilkInventoryRepository extends JpaRepository<MilkInventory, Long> {

    @Query("SELECT COALESCE(SUM(m.quantityInMl), 0) FROM MilkInventory m")
    double getTotalQuantityInMl();
}
