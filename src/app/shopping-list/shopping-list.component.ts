import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient:Ingredient[] = [
      new Ingredient("apples", 40),
      new Ingredient("oranges", 40),
      new Ingredient("milk", 30),
      new Ingredient("bread", 45),
      new Ingredient("apples", 40),
      new Ingredient("apples", 40),
      new Ingredient("apples", 40),
      new Ingredient("apples", 40),
      new Ingredient("grapes", 60),
      new Ingredient("apples", 40),
  ]
  constructor() { 
    console.log(this.ingredient)
  }

  ngOnInit() {
  }

}
