import { Injectable, signal } from '@angular/core';
import { BaseService } from './base-service';
import { IProduct, ISearch } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<IProduct>{
  protected override source: string = 'products';
  private productsListSignal = signal<IProduct[]>([]); 
  get products$() {
    return this.productsListSignal;
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
        this.productsListSignal.set(response.data);
      },
      error: (err: any) => {
        console.error('error', err)
      }
    })
  }
}
