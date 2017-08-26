
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";

const shopRoutes: Routes = [
  {path:'shopping', component: ShoppingListComponent},
]

@NgModule({
  imports:[RouterModule.forChild(shopRoutes)],
  exports:[RouterModule]
})

export class ShoppingRoutingModule{}
