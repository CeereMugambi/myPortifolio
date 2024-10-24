import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills:any={
    technologies:[{name:"Java, J2EE, Spring, C#",percent:90,remark:'excellent'}, {name:"PHP",percent:70,remark:'good'},{name:"Android",percent:90,remark:'excellent'},{name:"Python, C++",percent:70,remark:'very-good'}, {name:"JavaScript, BootStrap, Angular", percent:90,remark:'excellent'}],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Office",percent:90,remark:'excellent'},{name:"Linux, Windows",percent:70,remark:'very-good'},{name:"MySql, PgSql",percent:90,remark:'excellent'},{name:"Docker, Kubernetes",percent:50,remark:'average'}],
    methodologies:[{name:"Scrum",percent:70,remark:'very-good'},{name:"Uml",percent:90,remark:'excellent'},{name:"Disign Thinking",percent:70,remark:'good'},{name:"TDD",percent:90,remark:'excellent'},{name:"DevOps",percent:50,remark:'average'}]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}

