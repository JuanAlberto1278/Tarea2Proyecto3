package com.project.demo.logic.entity.category;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.project.demo.logic.entity.product.Product;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Table(name = "category")
@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    @OneToMany(mappedBy = "category", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
    @JsonManagedReference // Indica que es la parte que se serializa
    private Set<Product> products = new HashSet<>();

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }

    // Helper method to add a product to the category
    public void addProduct(Product product) {
        products.add(product);
        product.setCategory(this);
    }

    // Helper method to remove a product from the category
    public void removeProduct(Product product) {
        products.remove(product);
        product.setCategory(null);
    }
}
