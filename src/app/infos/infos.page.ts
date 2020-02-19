import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from '../services/api.service';
import {NavController} from '@ionic/angular';
import { Result } from '../models/contactes';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
})
export class infosPage implements OnInit {
  id: string;
  item:Result;
  
  picture;
  firstName;
  lastName;
  email;
  age;
  ville;
  phone;
  nat;
  gender;
  
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private navC: NavController) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.apiService.getItem(this.id).subscribe(response => {
      //this.picture = response.picture.larg 
      
       this.picture = response.picture.medium;
      this.firstName = response.name.first;
      this.lastName = response.name.last;
      this.email = response.email;
      this.phone = response.phone;
      this.nat = response.nat;
      this.ville = response.location.city;
      this.age = response.dob.age;
      this.gender = response.gender;
      
    });
  }
  
  ListC() {
    this.navC.navigateRoot('mes-contactes/');
  }


}