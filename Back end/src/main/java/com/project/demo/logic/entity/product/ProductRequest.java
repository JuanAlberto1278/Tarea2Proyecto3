package com.project.demo.logic.entity.product;

public class ProductRequest {
    private String name;
    private String description;
    private int price;
    private int stock;
    private Long categoryId;  // Agrega este campo

    // Getters y Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public Long getCategoryId() {
        return categoryId;  // Getter para categoryId
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;  // Setter para categoryId
    }
}
