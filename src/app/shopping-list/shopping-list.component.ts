import { Ingredient } from './../shared/ingredient.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[]= [
    new Ingredient("Apple", 3),
    new Ingredient("Tomato", 4)
  ];
  constructor() { }

  ngOnInit() {
  }

}
