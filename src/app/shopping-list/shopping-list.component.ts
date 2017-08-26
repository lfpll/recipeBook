import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from './shopping.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit,OnDestroy {
	ingredients:Ingredient[];
	private destSubs:Subscription;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.destSubs =  this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) =>
      {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy(){
    this.destSubs.unsubscribe();
  }

  editIngredient(index: number)
  {
    this.shoppingService.startEditing.next(index);
  }

}
