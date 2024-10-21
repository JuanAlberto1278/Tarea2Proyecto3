import { Component, EventEmitter, inject, Output } from '@angular/core';
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
  public productsForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required, Validators.min(1)],
    stock: ['', Validators.required, Validators.min(1)]
  })
  @Output () callSaveMethod: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  callSave() {
    let product = {
      name: this.productsForm.controls['name'].value,
      description: this.productsForm.controls['description'].value,
      price: this.productsForm.controls['price'].value,
      stock: this.productsForm.controls['stock'].value
    }
    this.callSaveMethod.emit(product)
  }
}