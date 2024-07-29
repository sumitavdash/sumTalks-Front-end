 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
 
  images: string[] = [
    '../assets/beuty.png',
    '../assets/beuty.png',
    '../assets/learn.jpg',
    // Add more image paths as needed
  ];
  currentImageIndex = 0;

  projectLinks: string[] = [
         'https://github.com/sumitavdash/BackEnd-spring-2.5.4-Angular.16.1x-eLearning-app.git',
        'https://github.com/sumitavdash/BackEnd-spring-2.5.4-Angular.16.2x-eLearning-app.git',
        'https://github.com/sumitavdash/BackEnd-spring-2.5.4-Angular.16.3-eLearning-app.git',
        // Add more backend URLs as needed
      ];

      // currentProjectLink: string = this.projectLinks[0];
      currentProjectIndex=0;


  constructor(){}

  ngOnInit(): void {

    this.changeImage();
     
  }
  changeImage(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      // this.currentProjectLink = this.projectLinks[this.currentImageIndex];
      this.currentProjectIndex=(this.currentProjectIndex + 1)% this.projectLinks.length;
    }, 2000); // Change image every 5 seconds
  }

}
 