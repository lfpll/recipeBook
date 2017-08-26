import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {RecipeService} from "../recipe/recipe.service";
import {Recipe} from "../recipe/recipe.model";
import {AuthService} from "../auth/auth.service";


@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService:RecipeService, private authService:AuthService) { }

  storeRecipes()
  {
    const token = this.authService.getToken();
    return this.http.put('https://recipe-91f86.firebaseio.com/recipes.json?auth='+ token,this.recipeService.getRecipes());
  }

  getRecipes()
  {
    const token = this.authService.getToken();
    return this.http.get('https://recipe-91f86.firebaseio.com/recipes.json?auth=' +token).subscribe(
      (response:Response) => {
        const recipes:Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    )
  }
}
