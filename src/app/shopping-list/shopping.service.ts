import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from "rxjs/Subject";

export class ShoppingService {
  startEditing = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>();
	private ingredients: Ingredient[] =[
	new Ingredient('Apples',4),
	new Ingredient('Tomatoes',3)]


  constructor() { }

  getIngredients(){
  	return this.ingredients.slice();
  }

  getIngredient(index:number)
  {
    return this.ingredients[index]
  }

  addIngredient(ingredient: Ingredient){
  	this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[]){
    console.log(this.ingredients);
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    console.log(this.ingredients);
  }

  updateIngredient(index :number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
    console.log(newIngredient)
  }

  deleteIngredient(index: number)
  {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
