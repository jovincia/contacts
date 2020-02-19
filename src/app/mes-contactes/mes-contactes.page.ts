import { Component, OnInit } from '@angular/core';
import { Result } from '../models/contactes';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-mes-contactes',
  templateUrl: './mes-contactes.page.html',
  styleUrls: ['./mes-contactes.page.scss'],
})
export class MesContactesPage implements OnInit {

  contactesData: any;
  router: any;
  
 
  constructor(
    public apiService: ApiService , private navC: NavController
  ) {
    this.contactesData = [];
  }
 
  ngOnInit() {
    this.getList();
  }
 
  getList() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.contactesData = response;
    })
  }
  getItem(id) {
    this.navC.navigateRoot('infos/' + id );
  }
  cliquer(id :number){
    this.navC.navigateRoot('infos/' + id );
  }
}



