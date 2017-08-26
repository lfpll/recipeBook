import { Component, OnInit } from '@angular/core';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[]
})
export class RecipeComponent implements OnInit {
	// choosedRecipe: Recipe;
  constructor(private recipeService: RecipeService){ }

  ngOnInit() {
  	/*this.recipeService.recipeSelected.subscribe(
  		(recipe: Recipe) =>{
  			this.choosedRecipe = recipe;
  		}
  		)*/
  }


}

