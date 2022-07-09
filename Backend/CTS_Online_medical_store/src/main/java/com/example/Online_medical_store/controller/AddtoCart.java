package com.example.Online_medical_store.controller;

import com.example.Online_medical_store.controller.requestPOJO.ApiResponse;
import com.example.Online_medical_store.controller.requestPOJO.ErrorResponse;
import com.example.Online_medical_store.entity.Cart;
import com.example.Online_medical_store.jwtconfiguration.MedicineConfiguration;
import com.example.Online_medical_store.service.cartService.CartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/addtocart")
public class AddtoCart {

    @Autowired
    private CartService cartService;

    @PostMapping("/addProduct")
    public ResponseEntity<?> addCartwithProduct(@RequestBody HashMap<String, String> addCartRequest) {
        try {
            String keys[] = {"userId", "productId" , "qty"};
            if (MedicineConfiguration.validationWithHashMap(keys, addCartRequest)) {

            }
            long productId = Long.parseLong(addCartRequest.get("productId"));
            Long userId = Long.parseLong(addCartRequest.get("userId"));
            int qty = Integer.parseInt(addCartRequest.get("qty"));
            List<Cart> obj = cartService.addOrderByUserIdAndProductId(productId, userId, qty);
            return ResponseEntity.ok(obj);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        }
    }

    @RequestMapping("/removeProductFromCart")
    public ResponseEntity<?> removeCartwithProductId(@RequestBody HashMap<String,String> removeCartRequest) {
        try {
            String keys[] = {"userId","productId"};
            if(MedicineConfiguration.validationWithHashMap(keys, removeCartRequest)) {

            }
            cartService.removeCartByUserIdAndProductId(Long.parseLong(removeCartRequest.get("userId")), Long.parseLong(removeCartRequest.get("productId")));
            return ResponseEntity.ok("Product removed from cart");
        }catch(Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @RequestMapping("getCartsByUserId")
    public ResponseEntity<?> getCartsByUserId(@RequestBody HashMap<String,String> getCartRequest) {
        try {
            String keys[] = {"userId"};
            if(MedicineConfiguration.validationWithHashMap(keys, getCartRequest)) {
            }
            List<Cart> obj = cartService.getCartByUserId(Long.parseLong(getCartRequest.get("userId")));
            return ResponseEntity.ok(obj);
        }catch(Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
