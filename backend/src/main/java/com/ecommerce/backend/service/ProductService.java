package com.ecommerce.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.repository.ProductRepository;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository repo;

    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product addProduct(Product product) {
        return repo.save(product);
    }

    public Product updateProduct(Long id, Product product) {
        Product existing = repo.findById(id).orElse(null);
        if(existing != null) {
            existing.setName(product.getName());
            existing.setPrice(product.getPrice());
            existing.setDescription(product.getDescription());
            return repo.save(existing);
        }
        return null;
    }

    public void deleteProduct(Long id) {
        repo.deleteById(id);
    }
}
