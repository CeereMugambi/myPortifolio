import { Component, OnInit } from '@angular/core';
import { referencesEn } from '../api/referencesEN';


@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  references:any=referencesEn;
  constructor() {
        this.references=referencesEn;
  }
  ngOnInit(): void {
  }

}
