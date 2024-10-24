import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'myPortfolio';
  currentYear:number;

constructor() {
  this.currentYear=new Date().getFullYear();
}
ngOnInit(): void {}
}

