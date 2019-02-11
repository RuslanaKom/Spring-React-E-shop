package com.project.beer.repositories;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project.beer.users.entities.User;
import com.project.beer.users.entities.UserAccount;

@Repository
public class UserRepository {
	
	@PersistenceContext
	EntityManager em;
	
	private final String GET_USER_BY_USERNAME = "select a.user from UserAccount a where a.username=:username";
	private final String GET_USER_ACCOUNT_BY_USERNAME = "select a from UserAccount a where a.username=:username";
	
	@Transactional
	public void save(Object T) {
		em.persist(T);
	}

	public User findUserByUserName(String username) {
		TypedQuery<User> query = em.createQuery(GET_USER_BY_USERNAME, User.class);
		query.setParameter("username", username);
		return  query.getSingleResult();
	}
	
	public UserAccount findUserAccountByUserName(String username) {
		TypedQuery<UserAccount> query = em.createQuery(GET_USER_ACCOUNT_BY_USERNAME, UserAccount.class);
		query.setParameter("username", username);
		return  query.getSingleResult();
	}
}
