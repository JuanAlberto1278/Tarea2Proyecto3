import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICategory } from '../../../interfaces';

@Component({
  selector: 'app-categories-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './categories-form.component.html',
  styleUrl: './categories-form.component.scss'
})
export class CategoriesFormComponent {
  public fb: FormBuilder = inject(FormBuilder);
  @Input() categoryId!: number;
  @Input() categoriesForm!: FormGroup;
  @Output () callSaveMethod: EventEmitter<ICategory> = new EventEmitter<ICategory>();
  @Output () callUpdateMethod: EventEmitter<ICategory> = new EventEmitter<ICategory>();

  callSave() {
    let category: ICategory = {
      name: this.categoriesForm.controls['name'].value,
      description: this.categoriesForm.controls['description'].value
    }
    if(this.categoriesForm.controls['id'].value) {
      category.id = this.categoriesForm.controls['id'].value
    } 
    if(category.id){
      this.callUpdateMethod.emit(category)
    } else {
      this.callSaveMethod.emit(category)
    }

    
  }
}