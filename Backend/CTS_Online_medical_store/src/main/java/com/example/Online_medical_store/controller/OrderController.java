package com.example.Online_medical_store.controller;

import com.example.Online_medical_store.entity.Cart;
import com.example.Online_medical_store.entity.Orders;
import com.example.Online_medical_store.jwtconfiguration.MedicineConfiguration;
import com.example.Online_medical_store.service.cartService.CartService;
import com.example.Online_medical_store.service.orderService.OrderService;
import com.example.Online_medical_store.service.productService.ProductService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.aspectj.internal.lang.annotation.ajcDeclareAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @Autowired
    ObjectMapper objectMapper;

    @RequestMapping("/checkout_order")
    public ResponseEntity<?> checkout_order(@RequestBody HashMap<String, String> addCartRequest) {
        // objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,
        // false);
        try {
            String keys[] = { "userId", "price", "paymentType", "deliveryAddress", "productIds", "quantity" };
            if (MedicineConfiguration.validationWithHashMap(keys, addCartRequest)) {

            }
            long userId = Long.parseLong(addCartRequest.get("userId"));
            double price = Double.parseDouble(addCartRequest.get("price"));
            ArrayList<Long> productIds = objectMapper.readValue(addCartRequest.get("productIds"), ArrayList.class);
            if (productService.checkTotalAmountAgainstCart(price, productIds)) {
                Orders order = new Orders();
                order.setId(getOrderId());
                order.setUserId(userId);
                order.setPrice(price);
                order.setPaymentType(addCartRequest.get("paymentType"));
                order.setDeliveryAddress(addCartRequest.get("deliveryAddress"));
                order.setProductIds(productIds);
                order.setQuantity(objectMapper.readValue(addCartRequest.get("quantity"), ArrayList.class));
                orderService.saveOrder(order);
                return ResponseEntity.ok("Order placed successfully");
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

    @RequestMapping("/getOrdersByUserId")
    public ResponseEntity<?> getOrdersByUserId(@RequestBody HashMap<String, String> ordersRequest) {
        try {
            String keys[] = { "userId" };
            if (MedicineConfiguration.validationWithHashMap(keys, ordersRequest)) {
                long userId = Long.parseLong(ordersRequest.get("userId"));
                return ResponseEntity.ok(orderService.orderByUserId(userId));
            } else {
                throw new Exception("Invalid request");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
}
