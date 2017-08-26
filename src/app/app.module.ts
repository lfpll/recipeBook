import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipeService } from './recipe/recipe.service';

import {ShoppingService} from './shopping-list/shopping.service';
import {AppRoutingModule} from "./app-routing.module";
import {RecipeResolveService} from "./recipe/recipe-detail/recipe-resolve.service";
import {DataStorageService} from "./shared/data-storage.service";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {SharedModule} from "./shared/shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
