import { Component, EventEmitter, inject, Output } from '@angular/core';
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
  public categoriesForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  })
  @Output () callSaveMethod: EventEmitter<ICategory> = new EventEmitter<ICategory>();

  callSave() {
    let category = {
      name: this.categoriesForm.controls['name'].value,
      description: this.categoriesForm.controls['description'].value
    }
    this.callSaveMethod.emit(category)
  }
}