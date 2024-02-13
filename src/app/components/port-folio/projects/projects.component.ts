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
    ' ',
    // Add more image paths as needed
  ];
  currentImageIndex = 0;


  constructor(){}

  ngOnInit(): void {

    this.changeImage();
     
  }
  changeImage(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 2000); // Change image every 5 seconds
  }

}
