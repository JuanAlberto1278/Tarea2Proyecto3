import { Injectable, signal } from '@angular/core';
import { BaseService } from './base-service';
import { ICategory, ISearch } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService<ICategory>{
  protected override source: string = 'categories';
  private categoriesListSignal = signal<ICategory[]>([]); 
  get categories$() {
    return this.categoriesListSignal;
  }
  public search: ISearch = {
    page: 1,
    size: 5
  }

  public totalItems: any = [];

  getAll() {
    this.findAllWithParams(this.search).subscribe({
      next: (response: any) =>{
        this.search = {...this.search, ...response.meta};
        this.totalItems = Array.from({length: this.search.totalPages ? this.search.totalPages: 0}, (_, i) => i+1);
        this.categoriesListSignal.set(response.data);
      },
      error: (err: any) => {
        console.error('error', err)
      }
    })
  }
}
