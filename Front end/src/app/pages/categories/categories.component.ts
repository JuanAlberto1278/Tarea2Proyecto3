import { Component, inject } from '@angular/core';
import { CategoriesListComponent } from '../../components/categories/categories-list/categories-list.component';
import { CategoriesService } from '../../services/categories.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoriesListComponent, PaginationComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  public categoriesService: CategoriesService = inject(CategoriesService);

  constructor( ) {
    this.categoriesService.getAll();
  }
}
