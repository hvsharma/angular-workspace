import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  private recipies: Recipe[];

  constructor() { }

  ngOnInit() {
    this.recipies = [
      new Recipe('Paneer Butter Masala', 'How to make Paneer Butter Masala',
        'https://c1.staticflickr.com/4/3220/2768229268_bd0f99c798_m.jpg'),
      new Recipe('Butter Chicken', 'How to make Butter Chicken',
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Butter_Chicken_and_Naan.jpg'),
      new Recipe('Mushroom Masala', 'How to make Mushroom Masala',
        'https://c1.staticflickr.com/9/8623/15914329462_c2764c77e2_n.jpg'),
    ];
  }

  getRecipies() {
    return this.recipies;
  }

}
