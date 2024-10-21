import { Component, inject, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/products/product-list/product-list.component';
import { ProductsService } from '../../services/products.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ModalService } from '../../services/modal.service';
import { ProductFormComponent } from '../../components/products/product-form/product-form.component';
import { IProduct } from '../../interfaces';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent, PaginationComponent, ModalComponent, LoaderComponent, ProductFormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  public productService: ProductsService = inject(ProductsService);
  public modalService: ModalService = inject(ModalService);
  @ViewChild('addProductsModal') addProductsModal: any;
  public fb: FormBuilder = inject(FormBuilder);
  productForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    stock: ['', Validators.required],
    categoryId: ['', Validators.required]
  })

  constructor() {
    this.productService.getAll();
  }

  saveProduct(product: IProduct) {
    this.productService.save(product);
    this.modalService.closeAll();
  }

  callEdition(product: IProduct) {
    this.productForm.controls['id'].setValue(product.id ? JSON.stringify(product.id) : '');
    this.productForm.controls['name'].setValue(product.name ? product.name : '');
    this.productForm.controls['description'].setValue(product.description ? product.description : '');
    this.productForm.controls['price'].setValue(product.price ? JSON.stringify(product.price) : '');
    this.productForm.controls['stock'].setValue(product.stock ? JSON.stringify(product.stock) : '');
    this.productForm.controls['categoryId'].setValue(product.categoryId ? JSON.stringify(product.categoryId): '')
    this.modalService.displayModal('md', this.addProductsModal);
  }
  
  updateProduct(product: IProduct){
    this.productService.update(product);
    this.modalService.closeAll();
  }

}