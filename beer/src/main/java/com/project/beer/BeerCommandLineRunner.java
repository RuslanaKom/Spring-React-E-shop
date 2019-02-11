package com.project.beer;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.config.annotation.authentication.configurers.userdetails.UserDetailsAwareConfigurer;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.project.beer.entities.Beer;
import com.project.beer.entities.Category;
import com.project.beer.repositories.BeerRepository;
import com.project.beer.repositories.UserRepository;
import com.project.beer.users.entities.User;
import com.project.beer.users.entities.UserAccount;;

@Component
public class BeerCommandLineRunner implements CommandLineRunner {
	@Autowired 
	private BeerRepository beerRepository;
	@Autowired 
	private UserRepository userRepository;
	@Autowired 
	private PasswordEncoder passwordEncoder;
	private int number=0;

	public BeerCommandLineRunner(BeerRepository beerRepository) {
		super();
		this.beerRepository = beerRepository;
	}

	@Override
	public void run(String... args) throws Exception {
//		List <Beer> beers = Stream.of("Kentucky Brunch Brand Stout", "Good Morning", "Very Hazy", "King Julius", "Budweiser", "Coors Light",
//				"PBR").map(name -> (new Beer(name, "Brewed with top fermenting yeast at cellar temperature, ales are fuller-bodied, with nuances of fruit or spice and a pleasantly hoppy finish. Generally robust and complex with a variety of fruit and malt aromas, ales come in many varieties.", 2.45)))
//				.collect(Collectors.toList());
//		
//		List <Category> categories = Stream.of("Light Beer", "Dark Beer", "Craft Beer")
//				.map(name->(new Category(name)))
//				.peek(cat->beerRepository.save(cat))
//				.collect(Collectors.toList());
//		
//		beers.stream()
//		.peek(beer->beer.setImagePath(createImagePath()))
//		.peek(beer->beer.setCategory(categories.get(randomNumberBetween(0,2))))
//		.forEach(beer->beerRepository.save(beer));
//		
//		System.out.println("linerunner made it");
//		
//		User user = new User();
//		user.setFirstName("firstName1");
//		user.setLastName("lastName1");
//		userRepository.save(user);
//		
//		UserAccount userAccount = new UserAccount();
//		userAccount.setUser(user);
//		userAccount.setUsername("user1");
//		userAccount.setPassword(passwordEncoder.encode("user1"));
//		userAccount.setRole("BUYER");
//		userAccount.setEnabled(true);
//		userAccount.setAccountNonLocked(true);
//		
//		userRepository.save(userAccount);
	}

	private String createImagePath() {
		if (number==5) {
		number=0;
		}
		number++;
		return Integer.toString(number);
		//return "./img/"+number+".png";
	}
	
	private int randomNumberBetween(int min, int max) {
		return min + (int)(Math.random() * ((max - min) + 1));
	}
	
	public BeerRepository getBeerRepository() {
		return beerRepository;
	}

	public void setBeerRepository(BeerRepository beerRepository) {
		this.beerRepository = beerRepository;
	}
}
