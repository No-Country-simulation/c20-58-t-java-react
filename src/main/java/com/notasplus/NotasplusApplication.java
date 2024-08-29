package com.notasplus;

import com.notasplus.model.entity.Role;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NotasplusApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotasplusApplication.class, args);
		System.out.println("\n--> NOTASPLUS en ejecución");
		System.out.println("");
		System.out.println("Test Pull Request...");
	}

}
