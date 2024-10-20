import {Component, Input, } from '@angular/core';
import { ICategory } from '../../../interfaces';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent{
  @Input() title: string = '';
  @Input() categories: ICategory[] = [];
}
