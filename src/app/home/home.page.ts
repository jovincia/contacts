import { Component, OnInit } from '@angular/core';
import { Result } from '../models/contactes';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contactesData: any[];



  constructor(private apiService: ApiService, private navC: NavController) 
  {this.contactesData = [];}
  
}

 

