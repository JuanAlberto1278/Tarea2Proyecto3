import { Component, inject, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/products/product-list/product-list.component';
import { ProductsService } from '../../services/products.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ModalService } from '../../services/modal.service';
import { ProductFormComponent } from '../../components/products/product-form/product-form.component';
import { IProduct } from '../../interfaces';

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

  constructor() {
    this.productService.getAll();
  }

  saveProduct(product: IProduct) {
    this.productService.save(product)
  }

}