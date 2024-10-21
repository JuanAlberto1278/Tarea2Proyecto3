import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduct } from '../../../interfaces';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  public fb: FormBuilder = inject(FormBuilder);
  @Input() productId!: number;
  @Input() productsForm!: FormGroup;
  @Output () callSaveMethod: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Output () callUpdateMethod: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  callSave() {
    let product: IProduct = {
      name: this.productsForm.controls['name'].value,
      description: this.productsForm.controls['description'].value,
      price: this.productsForm.controls['price'].value,
      stock: this.productsForm.controls['stock'].value,
      categoryId: this.productsForm.controls['categoryId'].value
    }
    if(this.productsForm.controls['id'].value){
      product.id = this.productsForm.controls['id'].value
    }
    if(product.id){
      this.callUpdateMethod.emit(product)
    } else{
      this.callSaveMethod.emit(product)
    }

    
  }
}