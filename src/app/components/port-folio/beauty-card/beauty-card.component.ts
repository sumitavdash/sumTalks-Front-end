 
// import { Component, OnInit, HostListener, NgZone } from '@angular/core';

// @Component({
//   selector: 'app-beauty-card',
//   templateUrl: './beauty-card.component.html',
//   styleUrls: ['./beauty-card.component.css']
// })
// export class BeautyCardComponent implements OnInit {
//   skills = [
//     { name: 'Java', percentage: 85, width: '0%', displayedPercentage: 0 },
//     { name: 'Spring Boot', percentage: 70, width: '0%', displayedPercentage: 0 },
//     { name: 'TypeScript', percentage: 60, width: '0%', displayedPercentage: 0 },
//     { name: 'HTML / CSS', percentage: 75, width: '0%', displayedPercentage: 0 },
//     { name: 'Angular', percentage: 80, width: '0%', displayedPercentage: 0 },
//     { name: 'CloudServices: aws EC2 & S3', percentage: 65, width: '0%', displayedPercentage: 0 },
//     // Add more skills as needed
//   ];

//   constructor(private ngZone: NgZone) {}

//   ngOnInit(): void {
//     this.checkScroll();
//   }

//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll(): void {
//     this.checkScroll();
//   }

//   checkScroll(): void {
//     const windowHeight = window.innerHeight;
//     this.skills.forEach((skill, index) => {
//       const element = document.querySelectorAll('.progress')[index] as HTMLElement;
//       const positionFromTop = element.getBoundingClientRect().top;

//       if (positionFromTop - windowHeight <= 0 && skill.width === '0%') {
//         skill.width = skill.percentage + '%';
//         this.animatePercentage(skill);
//       }
//     });
//   }

//   animatePercentage(skill: any): void {
//     let currentPercentage = 0;
//     const stepTime = 10000 / skill.percentage; // Calculate time interval based on the target percentage and total animation duration (5 seconds)

//     this.ngZone.runOutsideAngular(() => {
//       const interval = setInterval(() => {
//         if (currentPercentage >= skill.percentage) {
//           clearInterval(interval);
//         } else {
//           currentPercentage++;
//           this.ngZone.run(() => {
//             skill.displayedPercentage = currentPercentage;
//           });
//         }
//       }, stepTime);
//     });
//   }
// }
import { Component, OnInit, HostListener, NgZone } from '@angular/core';

@Component({
  selector: 'app-beauty-card',
  templateUrl: './beauty-card.component.html',
  styleUrls: ['./beauty-card.component.css']
})
export class BeautyCardComponent implements OnInit {
  skills = [
    { name: 'Java', percentage: 85, width: '0%', displayedPercentage: 0 },
    { name: 'Spring Boot', percentage: 70, width: '0%', displayedPercentage: 0 },
    { name: 'TypeScript', percentage: 60, width: '0%', displayedPercentage: 0 },
    { name: 'HTML / CSS', percentage: 75, width: '0%', displayedPercentage: 0 },
    { name: 'Angular', percentage: 80, width: '0%', displayedPercentage: 0 },
    { name: 'CloudServices: aws EC2 & S3', percentage: 65, width: '0%', displayedPercentage: 0 },
    // Add more skills as needed
  ];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const windowHeight = window.innerHeight;
    this.skills.forEach((skill, index) => {
      const elements = document.querySelectorAll('.progress');
      if (elements[index]) {
        const element = elements[index] as HTMLElement;
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0 && skill.width === '0%') {
          skill.width = skill.percentage + '%';
          this.animatePercentage(skill);
        }
      }
    });
  }

  animatePercentage(skill: any): void {
    let currentPercentage = 0;
    const stepTime = 10000 / skill.percentage; // Calculate time interval based on the target percentage and total animation duration (10 seconds)

    this.ngZone.runOutsideAngular(() => {
      const interval = setInterval(() => {
        if (currentPercentage >= skill.percentage) {
          clearInterval(interval);
        } else {
          currentPercentage++;
          this.ngZone.run(() => {
            skill.displayedPercentage = currentPercentage;
          });
        }
      }, stepTime);
    });
  }
}

