import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private ingredients: Ingredient[];

  constructor() { }

  ngOnInit() {
    this.ingredients = [
      new Ingredient('Mint', 5),
      new Ingredient('Tomato', 20),
      new Ingredient('Cottage Cheese', 200)
    ];
  }

  getIngredients() {
    return this.ingredients;
  }

}
