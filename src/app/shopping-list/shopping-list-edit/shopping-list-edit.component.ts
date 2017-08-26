import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  editMode = false;
  editFile;
  editIndex: number;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.shoppingService.startEditing.subscribe(
      (item: number) =>
      {
        this.editMode = true;
        this.editIndex = item;
        this.editFile = this.shoppingService.getIngredient(item);
        this.slForm.setValue({
          name: this.editFile.name,
          amount: this.editFile.amount
        })
      }
    );
  }

  addItem(f) {
    const newIngredient = new Ingredient(f.name, f.amount);
    (this.editMode? this.shoppingService.updateIngredient(this.editIndex,newIngredient):this.shoppingService.addIngredient(newIngredient));
    this.editMode = false;
  }

  onClear()
  {
    this.slForm.reset();
    this.editMode = false;
  }

  deleteItem()
  {
    this.shoppingService.deleteIngredient(this.editIndex);
    this.onClear();
  }
}
