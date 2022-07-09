package com.example.Online_medical_store.controller;

import com.example.Online_medical_store.controller.requestPOJO.CheckoutRequest;
import com.example.Online_medical_store.entity.Orders;
import com.example.Online_medical_store.jwtconfiguration.MedicineConfiguration;
import com.example.Online_medical_store.service.cartService.CartService;
import com.example.Online_medical_store.service.orderService.OrderService;
import com.example.Online_medical_store.service.productService.ProductService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;

import aj.org.objectweb.asm.TypeReference;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    CartService cartService;

    @Autowired
    ProductService productService;

    @Autowired
    OrderService orderService;

    @RequestMapping("/checkout_order")
    public ResponseEntity<?> checkout_order(@RequestBody CheckoutRequest request) {

        try {
            long userId = request.getUserId();
            double price = request.getPrice();
            if (productService.checkTotalAmountAgainstCart(price, request.getProductIds())) {
                Orders order = new Orders();
                order.setId(getOrderId());
                order.setUserId(userId);
                order.setPrice(price);
                order.setPaymentType(request.getPaymentType());
                order.setDeliveryAddress(request.getDeliveryAddress());
                order.setProductIds(request.getProductIds());
                order.setQuantity(request.getQuantity());
                productService.updateProductStock(request.getProductIds(), request.getQuantity());
                orderService.saveOrder(order);
                return ResponseEntity.ok(orderService.saveOrder(order));
            } else {
                throw new Exception("Total amount is mismatch");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    public int getOrderId() {
        Random r = new Random(System.currentTimeMillis());
        return 10000 + r.nextInt(20000);
    }

    @RequestMapping("/getOrdersByUserId/{userId}")
    public ResponseEntity<?> getOrdersByUserId(@PathVariable Long userId) {
        try {

            return ResponseEntity.ok(orderService.orderByUserId(userId));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
}
