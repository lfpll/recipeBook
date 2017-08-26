import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./core/home/home.component";
import {AuthGuardService} from "./auth/auth-guard.service";

const appRoutes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'recipes', loadChildren:'./recipe/recipe.module#RecipeModule'},
  {path:'*',redirectTo:''}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports:[RouterModule]
})

export class AppRoutingModule { }
