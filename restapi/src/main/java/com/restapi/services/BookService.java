package com.restapi.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restapi.dao.BookRepository;
import com.restapi.entities.Book;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository;

	public List<Book> getAll() {
		return  bookRepository.findAll();
	}

	public Optional<Book> get(int id) {
		return bookRepository.findById(id);
	}

	public Book insert(Book book) {
		return bookRepository.save(book);
	}

	public void delete(int id) {
		bookRepository.deleteById(id);
	}

	public Book update(Book book, int id) {
		book.setId(id);
		return bookRepository.save(book);
	}

}
