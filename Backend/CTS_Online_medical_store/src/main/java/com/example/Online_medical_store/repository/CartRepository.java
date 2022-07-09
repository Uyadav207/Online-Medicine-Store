package com.example.Online_medical_store.repository;

import com.example.Online_medical_store.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    List<Cart> findByUserId(Long userId);

    void deleteById(Long Id);

    void deleteByUserIdAndProductId(Long userId, Long productId);

    void deleteByProductId(Long productId);

    Optional<Cart> findByProductIdAndUserId(Long productId, Long userId);

    void deleteByUserId(Long userId);

}
