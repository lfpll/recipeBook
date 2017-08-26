import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;
 	constructor(private recipeService: RecipeService,private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
 	  this.route.params.subscribe(
      (params:Params)=> {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    )
  }

  addToShpList(recipe){
  	this.recipeService.addToShoppList(recipe.ingredients);
  }

  editRecipe()
  {
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  deleteRecipe()
  {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}
