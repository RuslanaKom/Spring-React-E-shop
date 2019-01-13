package com.project.beer.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

@Component
public class ShoppingCart {

	private List<BeerDto> cart;
	private Double totalSum;
	
	public ShoppingCart() {
		this.cart=new ArrayList<BeerDto>();
		this.totalSum=0D;
	}
	
	public void addToCart(Beer beer) {
		
		Optional <BeerDto> beerDto1 = cart.stream()
				.filter(beerDto -> beerDto.getName().equals(beer.getName())).findAny();
		if (beerDto1.isPresent()) {
			beerDto1.get().setQuantity(beerDto1.get().getQuantity()+1);
		}
		else {
			cart.add(new BeerDto(beer.getName(), beer.getPrice(), 1));
		}
		totalSum+=beer.getPrice();
}
	
	public void removeFromCart(String beerName) {
		Optional <BeerDto> beerDto1  = cart.stream()
		.filter(beerDto -> beerDto.getName().equals(beerName)).findFirst();
		totalSum-=beerDto1.get().getPrice()*beerDto1.get().getQuantity();
		cart.remove(beerDto1.get());
	}

	public Double getTotalSum() {
		return totalSum;
	}

	public void setTotalSum(Double totalSum) {
		this.totalSum = totalSum;
	}
	public List<BeerDto> getCart() {
		return cart;
	}

	public void setCart(List<BeerDto> cart) {
		this.cart = cart;
	}


}
