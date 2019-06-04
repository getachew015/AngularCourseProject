import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("Shiro Wot","This is how to make tafach shiro wot","http://res.publicdomainfiles.com/pdf_view/2/13494146416391.jpg"),
    new Recipe("Key Wot","This is how to make tafach shiro wot","http://res.publicdomainfiles.com/pdf_view/2/13494146416391.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
