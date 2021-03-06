import { Component, OnInit, } from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {Response } from "@angular/http";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage : DataStorageService, public authService:AuthService) { }

  ngOnInit() {
  }

  onSave()
  {
    this.dataStorage.storeRecipes().subscribe(
      (response: Response) => console.log(response)
      )
  }
  onGet()
  {
    this.dataStorage.getRecipes()
  }
  onLogout()
  {
    this.authService.signOutUser();
  }
}
