import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingListComponent} from "../shopping-list.component";
import {ShoppingListEditComponent} from "../shopping-list-edit/shopping-list-edit.component";
import {ShoppingRoutingModule} from "../shopping-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ShoppingRoutingModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ]
})
export class ShoppingListModule { }
