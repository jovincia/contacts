import { Component, OnInit } from '@angular/core';
import { Result } from '../models/contactes';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-contactes',
  templateUrl: './mes-contactes.page.html',
  styleUrls: ['./mes-contactes.page.scss'],
})
export class MesContactesPage implements OnInit {

  contactesData: any;
 
  constructor(
    public apiService: ApiService
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
}
  
