package com.project.beer.users.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Address {
	
	@Id
	@GeneratedValue
	private Long id;
	private String city;
	private String street;
	private String houseNr;
	private String appartmentNr;

}
