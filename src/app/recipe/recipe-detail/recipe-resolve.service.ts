import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../shared/ingredient.model";
import {Recipe} from "../recipe.model";


@Injectable()
export class RecipeResolveService implements Resolve<Recipe>{

  constructor(private recipeService: RecipeService ) {}

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe
  {
    return this.recipeService.getRecipe(+route.params['id']);
  }

}
