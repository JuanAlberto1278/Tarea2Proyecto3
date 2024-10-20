import { Component, inject } from '@angular/core';
import { ProductListComponent } from '../../components/products/product-list/product-list.component';
import { ProductsService } from '../../services/products.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent, PaginationComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  public productService: ProductsService = inject(ProductsService);

  constructor() {
    this.productService.getAll();
  }
}
