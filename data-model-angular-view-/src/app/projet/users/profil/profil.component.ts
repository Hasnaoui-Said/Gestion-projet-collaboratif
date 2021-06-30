import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../../../controller/service/dim-user.service';
import {DimUser} from '../../../controller/model/dim-user.model';
import {AppComponent} from '../../../app.component';
import {AuthService} from '../../../controller/service/auth.service';
import {TokenStorageService} from '../../../controller/service/token-storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  roles: string[] = [];
  addfaireclic: any;
  addbloquerclic: any;
  addterminerclic: any;
  addverifierclic: any;
  constructor(
    private userService: DimUserService,
    private appComponent: AppComponent,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.roles = this.tokenStorage.getUser().roles;
  }
  get user(): DimUser {
    return this.authService.user;
  }

  addfaire() {
    this.addfaireclic = true;
    this.addterminerclic = false;
    this.addbloquerclic = false;
    this.addverifierclic = false;
  }
  addterminer() {
    this.addterminerclic = true;
    this.addfaireclic = false;
    this.addbloquerclic = false;
    this.addverifierclic = false;
  }
  addbloquer() {
    this.addbloquerclic = true;
    this.addfaireclic = false;
    this.addterminerclic = false;
    this.addverifierclic = false;
  }
  addverifier() {
    this.addverifierclic = true;
    this.addfaireclic = false;
    this.addterminerclic = false;
    this.addbloquerclic = false;
  }
}
