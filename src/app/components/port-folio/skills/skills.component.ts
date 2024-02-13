import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{


  skills: Skill[]=[
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'HTML, CSS, Ts',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'JAVA, SpringBoot',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'C',
      level: 'Intermediate',
      rating: 80,
    },
  ]

  constuctor(){}

  ngOnInit(): void {
     
  }

}
