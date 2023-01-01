package com.restapi.controller;

import java.util.List;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.restapi.entities.Book;
import com.restapi.services.BookService;
import com.restapi.services.ImageHandler;

@RestController
public class MainController {

	@Autowired
	private BookService bookService;
	@Autowired
	private ImageHandler handler;

	@GetMapping("/book")
	public ResponseEntity<List<Book>> getAll() {
		List<Book> all = bookService.getAll();
		if (all.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		else
			return ResponseEntity.ok(all);
	}

	@GetMapping("/book/{id}")
	public ResponseEntity<Optional<Book>> get(@PathVariable("id") int id) {
		Optional<Book> book = bookService.get(id);
		if (book.isEmpty())
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		else
			return ResponseEntity.ok(book);
	}

	@PostMapping("/book")
	public ResponseEntity<Book> insert(@ModelAttribute Book book, @RequestParam(value="image", required=false ) MultipartFile file) {
		try {
		

			if (file!=null) {
				String saveImage = handler.saveImage(file);
				book.setPic(saveImage);
			}else {
				book.setPic("default.jpg");
			}
			Book insert = this.bookService.insert(book);
			
			return ResponseEntity.status(HttpStatus.CREATED).body(insert);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}

	}
    
	@CrossOrigin( origins = "http://localhost:3000")
	@DeleteMapping("/book/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") int id) {
		try {
			this.bookService.delete(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}

	}
	
	@CrossOrigin( origins = "http://localhost:3000")
	@PutMapping("/book/{id}")
	public ResponseEntity<Book> update(@ModelAttribute Book book, @PathVariable("id") int id, @RequestParam(value="image", required=false) MultipartFile file) {
		try {
			if (file!=null) {
				String saveImage = handler.saveImage(file);
				book.setPic(saveImage);
			}
			Book insert = this.bookService.update(book, id);
			return ResponseEntity.status(HttpStatus.CREATED).body(insert);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@PostMapping("/upload")
	public String upload( @RequestParam(value="image", required=false ) MultipartFile file){
            try {
            	
            	if(file!=null) {
            		System.out.println(file.getOriginalFilename());
            	}else {
            		System.out.println("empty file");
            	}
		    	return "working";
			//return ResponseEntity.status(HttpStatus.CREATED).body(saveImage);
		} catch (Exception e) {
			//return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			e.printStackTrace();
			return "has some error";
		}
            
		
	}

}
