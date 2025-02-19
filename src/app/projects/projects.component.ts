import { Component, OnInit } from '@angular/core';
import { projectsEn } from '../api/projectsEN';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  projects:any[]=projectsEn;
  venobox: any;
  constructor() {
        this.projects=projectsEn;
      }
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    console.log("after view init");
    this.onMouse("myPortfolio-link", "portfoliodashboard-img");
    this.onMouse("weatherApp-link", "weatherapp-img");
    this.onMouse("AngularTradingBot-link", "AngularTradingBot-img");

    this.venobox = $('.venobox');
    this.venobox.venobox();
  }

  detailOnClick(project: any) {
    this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
  }

  onMouse(idLink: String, idImage: String) {
    $('#' + idLink).on("mouseenter", function () {
      console.log('on mouseenter');
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );

    $('#' + idImage).on("mouseenter", function () {
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );
  }
}