package com.project.beer.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.beer.entities.Beer;
import com.project.beer.entities.Category;
import com.project.beer.repositories.BeerRepository;

@Service
public class BeerService {

	private BeerRepository beerRepository;
	
	public BeerService(BeerRepository beerRepository) {
		this.beerRepository = beerRepository;
	}
	
	public Beer findBeerByName(String name) {
		return beerRepository.findBeerByName(name);	
	}

	public List<Beer> findAllBeer(){
		return beerRepository.findAllBeer();
	}
	
	public List<Beer> findBeersByCategory(String category){
		return beerRepository.findBeersByCategory(category);
	}
	
	public List<Category> findAllCategories(){
		return beerRepository.findAllCategories();
	}
	
	public Beer findOneBeer(){
		return beerRepository.findOneBeer();
	}
	
	public BeerRepository getBeerRepository() {
		return beerRepository;
	}

	public void setBeerRepository(BeerRepository beerRepository) {
		this.beerRepository = beerRepository;
	}
}
