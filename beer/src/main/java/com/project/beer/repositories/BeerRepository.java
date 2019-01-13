package com.project.beer.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.project.beer.entities.Beer;
import com.project.beer.entities.Category;

@Repository
public class BeerRepository {

	@PersistenceContext
	EntityManager em;

	private final String GET_BEER = "select b from Beer b";
	private final String GET_BEER_BY_NAME = "select b from Beer b where b.name=: name";
	private final String GET_CATEGORIES = "select c from Category c";
	private final String GET_BEERS_BY_CATEGORY = "select b from Beer b where b.category.categoryName=:category";

	public BeerRepository(EntityManager em) {
		super();
		this.em = em;
	}
	
	public List<Beer> findAllBeer() {
		Query query = em.createQuery(GET_BEER);
		List<Beer> b = query.getResultList();
		return b;
	}

	public Beer findOneBeer() {
		Query query = em.createQuery(GET_BEER);
		return (Beer) query.getResultList().get(0);
	}

	public Beer findBeerByName(String name) {
		Query query = em.createQuery(GET_BEER_BY_NAME).setParameter("name", name);
		return (Beer) query.getResultList().get(0);
	}

	public List<Category> findAllCategories() {
		Query query = em.createQuery(GET_CATEGORIES);
		return query.getResultList();
	}
	
	public List<Beer> findBeersByCategory(String category) {
		Query query = em.createQuery(GET_BEERS_BY_CATEGORY).setParameter("category", category);
		return  query.getResultList();
	}

	public EntityManager getEm() {
		return em;
	}

	public void setEm(EntityManager em) {
		this.em = em;
	}

	//@Transactional
	public void save(Object T) {
		em.persist(T);
	}
}
