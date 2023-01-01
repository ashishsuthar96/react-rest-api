package com.restapi.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	private String pic; // image
	private String catagory; // dropdown
	private int pages;
	private double price;
	private boolean isEnable; // checkbox
	private String authorName; 
	private String authorGender;
	private String langauge;



	public Book(int id, String name, String image, String catagory, int pages, double price, boolean isEnable,
			String author, String authorGender, String langauge) {
		super();
		this.id = id;
		this.name = name;
		this.pic = image;
		this.catagory = catagory;
		this.pages = pages;
		this.price = price;
		this.isEnable = isEnable;
		this.authorName = author;
		this.authorGender = authorGender;
		this.langauge = langauge;
	}

	public Book() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPic() {
		return pic;
	}

	public void setPic(String image) {
		this.pic = image;
	}

	public String getCatagory() {
		return catagory;
	}

	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}

	public int getPages() {
		return pages;
	}

	public void setPages(int pages) {
		this.pages = pages;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public boolean isEnable() {
		return isEnable;
	}

	public void setEnable(boolean isEnable) {
		this.isEnable = isEnable;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getAuthorGender() {
		return authorGender;
	}

	public void setAuthorGender(String authorGender) {
		this.authorGender = authorGender;
	}

	public String getLangauge() {
		return langauge;
	}

	public void setLangauge(String langauge) {
		this.langauge = langauge;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", name=" + name + ", pic=" + pic + ", catagory=" + catagory + ", pages=" + pages
				+ ", price=" + price + ", isEnable=" + isEnable + ", authorName=" + authorName + ", authorGender="
				+ authorGender + ", langauge=" + langauge + "]";
	}
	
	


}
