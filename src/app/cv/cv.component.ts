import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { experiencesEn } from '../api/experiencesEN';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent implements OnInit{
  experiences:any;
  planeIcon: any ;
  cookingIcon:any;
  swimmingIcon:any;
  documentaryIcon:any;

  constructor() {
        this.experiences=experiencesEn;
  }

  ngOnInit(): void {
    this.planeIcon=awesom.faPlane;
    this.cookingIcon=awesom.faKitchenSet;
    this.swimmingIcon=awesom.faSwimmer;
    this.documentaryIcon=awesom.faTelevision;

  }
  
  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }
 

}

