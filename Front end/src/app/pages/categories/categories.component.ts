import { Component, inject, ViewChild } from '@angular/core';
import { CategoriesListComponent } from '../../components/categories/categories-list/categories-list.component';
import { CategoriesService } from '../../services/categories.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ModalService } from '../../services/modal.service';
import { CategoriesFormComponent } from '../../components/categories/categories-form/categories-form.component';
import { ICategory } from '../../interfaces';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoriesListComponent, PaginationComponent, ModalComponent, LoaderComponent, CategoriesFormComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  public categoriesService: CategoriesService = inject(CategoriesService);
  public modalService: ModalService = inject(ModalService);
  @ViewChild('addCategoriesModal') addCategoriesModal: any;
  
  constructor( ) {
    this.categoriesService.getAll();
  }

  saveCategory(category: ICategory) {
    this.categoriesService.save(category)
  }

}