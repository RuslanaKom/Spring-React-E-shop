package com.project.beer.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Beer {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String description;
	private double price;
	private String imagePath;
	
	@ManyToOne
	private Category category;
	


	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public Beer() {
	}

	public Beer(Long id, String name, String description, double price, String imagePath, Category category) {
		this.id=id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.imagePath=imagePath;
		this.category=category;
	}
	
	public Beer(String name, String description, double price) {
		this.name = name;
		this.description = description;
		this.price = price;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

}
