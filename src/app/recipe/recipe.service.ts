import {Recipe} from './recipe.model';
import {ShoppingService} from '../shopping-list/shopping.service'
import { EventEmitter,Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipesChanges = new Subject<Recipe[]>();
	recipeSelected = new EventEmitter<Recipe>();

  constructor(private shpService:ShoppingService) { }

  private recipes: Recipe[] = [ // An Array of recipe models
	new Recipe('A Donut Recipe',
		'This is a teste',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Doughnut-1023029-m-1.jpg/220px-Doughnut-1023029-m-1.jpg',
		[
		new Ingredient('Flour',4), new Ingredient('Sugar',3)]
		),
	new Recipe('French Fries',
		'This is a teste',
		'https://i.stack.imgur.com/STEuc.png',
		[new Ingredient('Potato',2)]
		)];


  setRecipes(recipes: Recipe[])
  {
    this.recipes = recipes;
    this.recipesChanges.next(this.recipes.slice());
  }

	getRecipes(){
		return this.recipes.slice(); // Get a copy of the array
	}

	getRecipe(id: number)
  {
    return this.recipes[id];
  }

	addToShoppList(ingredients: Ingredient[]){
		this.shpService.addIngredients(ingredients);
	}

	updateRecipe(index: number, newRecipe:Recipe)
  {
    this.recipes[index] = newRecipe;
    this.recipesChanges.next(this.recipes.slice());
  }

  addRecipe(newRecipe: Recipe)
  {
    this.recipes.push(newRecipe);
    this.recipesChanges.next(this.recipes.slice());
  }

  deleteRecipe(id:number)
  {;
    this.recipes.splice(id,1);
    this.recipesChanges.next(this.recipes.slice());
  }
}
