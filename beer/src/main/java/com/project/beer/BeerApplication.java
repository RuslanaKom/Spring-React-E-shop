package com.project.beer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.project.beer", "com.eproject.beer.enitites","com.project.beer.repositories",
		"com.eproject.beer.controllers","com.project.beer.services", "Configs"} )
public class BeerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeerApplication.class, args);
	}
}
