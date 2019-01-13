package com.project.beer.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.beer.entities.Beer;
import com.project.beer.entities.Category;
import com.project.beer.entities.ShoppingCart;
import com.project.beer.services.BeerService;

@Controller
@RequestMapping("/")
public class BeerController {

	private BeerService beerService;
	private ShoppingCart shoppingCart;

	public BeerController(BeerService beerService, ShoppingCart shoppingCart) {
		super();
		this.beerService = beerService;
		this.shoppingCart = shoppingCart;
	}

	@GetMapping(value = "/beers", produces = "application/json")
	public  @ResponseBody List <Beer> getBeers() {
		return beerService.findAllBeer();
	}
	
	@GetMapping(value = "/beer/{name}", produces = "application/json")
	public  @ResponseBody Beer getBeer(@PathVariable String name) {
		return beerService.findBeerByName(name);
	}
	
	@GetMapping(value = "/categories", produces = "application/json")
	public  @ResponseBody List<Category> getCategories() {
		return beerService.findAllCategories();
	}
	
	@GetMapping(value = "/beers/{category}", produces = "application/json")
	public  @ResponseBody List<Beer> getCategories(@PathVariable String category) {
		return beerService.findBeersByCategory(category);
	}
	
	@GetMapping(value = "/onebeer")
	public  @ResponseBody ResponseEntity<Beer> getOneBeer() {
		return ResponseEntity.status(HttpStatus.OK).body(beerService.findOneBeer());
	}
	
	@PostMapping(value = "/puttocart")
	public @ResponseBody void putBeerToCart( @RequestBody Beer beer) {
		shoppingCart.addToCart(beer);
	}
	
	@PostMapping(value = "/removefromcart")
	public @ResponseBody void putBeerToCart( @RequestBody String beername) {
		shoppingCart.removeFromCart(beername);
	}

	@GetMapping(value = "/cart")
	public  @ResponseBody ResponseEntity<ShoppingCart> getCart() {
		return ResponseEntity.status(HttpStatus.OK).body(shoppingCart);
	}
	
	@GetMapping(value = "/clearCart")
	public @ResponseBody void clearCart() {
		shoppingCart.getCart().clear();
		shoppingCart.setTotalSum(0D);
	}
	
	public BeerService getBeerService() {
		return beerService;
	}

	public void setBeerService(BeerService beerService) {
		this.beerService = beerService;
	}
	
	public ShoppingCart getShoppingCart() {
		return shoppingCart;
	}

	public void setShoppingCart(ShoppingCart shoppingCart) {
		this.shoppingCart = shoppingCart;
	}

}
