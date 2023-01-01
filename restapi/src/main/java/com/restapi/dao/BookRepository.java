package com.restapi.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.restapi.entities.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {
	 List<Book> findAll();
}
