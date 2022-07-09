package com.example.Online_medical_store;

import com.example.Online_medical_store.controller.requestPOJO.LoginRequest;
import com.example.Online_medical_store.entity.Products;
import com.example.Online_medical_store.entity.Users;
import com.example.Online_medical_store.repository.ProductsRepository;
import com.example.Online_medical_store.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
@EnableTransactionManagement
public class OnlineMedicalStoreApplication {

	@Autowired
	UsersRepository repo;

	@Autowired
	ProductsRepository productsRepository;

	@PostConstruct
	public void users() {
		List<Users> users = Stream.of(new Users(1, "nethan", "nethan@gmail.com", "password", "hyderabad", "22", "Male"),
				new Users(2, "sai", "sai@gmail.com", "passwor234d", "bangalore", "22", "Male"),
				new Users(3, "teja", "teja@gmail.com", "passwo334rd", "chennai", "22", "female"))
				.collect(Collectors.toList());
		repo.saveAll(users);
	}

	@PostConstruct
	public void products() {
		List<Products> products = Stream.of(
				new Products(1, "product1", 200, new Date(2021, 8, 14), 4000, "4.9", new Date(2022, 8, 12),
						"decription1"),
				new Products(2, "product2", 300, new Date(2021, 8, 14), 4000, "4.5", new Date(2022, 8, 12),
						"decription2"),
				new Products(3, "product3", 400, new Date(2021, 8, 14), 4000, "4.6", new Date(2022, 8, 12),
						"decription3"))
				.collect(Collectors.toList());
		productsRepository.saveAll(products);
	}

	public static void main(String[] args) {
		SpringApplication.run(OnlineMedicalStoreApplication.class, args);
	}

}
