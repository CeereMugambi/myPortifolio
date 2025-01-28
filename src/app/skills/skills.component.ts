import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills:any={
    technologies:[{name:"Javascript,Typescript",percent:90,remark:'excellent'}, {name:"HTML,CSS,SASS,SCSS",percent:90,remark:'excellent'},{name:"JSON",percent:90,remark:'excellent'},{name:"Angular Framework",percent:90,remark:'excellent'},{name:"Python",percent:70,remark:'very-good'}],
    tools:[{name:"Git,Github",percent:90,remark:'excellent'},{name:"Linux, Windows",percent:70,remark:'very-good'},{name:"Docker, Kubernetes",percent:50,remark:'average'},{name:"Microsoft Azure",percent:90,remark:'excellent'},{name:"Chrome Dev Tools",percent:90,remark:'excellent'},{name:"Visual Studio Code",percent:90,remark:'excellent'}],
    methodologies:[{name:"Responsive Design",percent:90,remark:'excellent'},{name:"Component Based Architecture",percent:90,remark:'excellent'},{name:"Agile",percent:90,remark:'excellent'},{name:"Design Thinking",percent:70,remark:'very-good'},{name:"Versioning",percent:90,remark:'excellent'},{name:"Testing",percent:50,remark:'average'}],
    others:[{name:"Version Control Worklflow",percent:90,remark:'excellent'}, {name:"API Handling",percent:90,remark:'excellent'},{name:"JSON",percent:90,remark:'excellent'},{name:"Performance Optimization",percent:90,remark:'excellent'},{name:"Debugging and Monitoring",percent:70,remark:'very-good'},{name:"Localization and Internationalization",percent:70,remark:'very-good'}],
  
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}

