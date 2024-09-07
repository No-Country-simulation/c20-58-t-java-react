package com.notaplus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NotaPlusApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotaPlusApplication.class, args);
		System.out.println("\n--> NotaPlus en ejecución");
		System.out.println("");
	}
}
