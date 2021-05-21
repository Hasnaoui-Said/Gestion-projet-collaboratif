import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../../controller/service/dim-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private userService: DimUserService) { }

  ngOnInit(): void {
  }


  get booleans(): boolean {
    return this.userService.booleans;
  }
  get clic(): boolean {
    return this.userService.clic;
  }
  set clic(value: boolean) {
    this.clic=true;
     this.userService.clic;
  }

}
