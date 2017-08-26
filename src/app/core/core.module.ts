import { NgModule } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {ShoppingService} from '../shopping-list/shopping.service';
import {RecipeService} from '../recipe/recipe.service';
import {RecipeResolveService} from '../recipe/recipe-detail/recipe-resolve.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from "../auth/auth.service";

@NgModule({
  imports: [SharedModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent,
    HomeComponent],
  exports: [HeaderComponent,
    AppRoutingModule],
  providers: [ShoppingService, RecipeService, RecipeResolveService, DataStorageService, AuthService],

})
export class CoreModule { }
