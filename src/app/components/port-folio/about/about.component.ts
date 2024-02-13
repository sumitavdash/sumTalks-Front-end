import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   

  aboutMe: string[]=[
    'Greetings! I am Sumitav, a passionate and dynamic individual embarking on a journey into the world of technology. As a recent graduate with a Bachelors degree in Computer Science and Engineering, I am driven by a relentless curiosity and a fervent desire to make a meaningful impact through innovative solutions.',
    'My academic journey has equipped me with a strong foundation in computer science principles, software development methodologies, and problem-solving skills. During my studies, I delved into diverse subjects, from data structures and algorithms to database management and software engineering etc.',
    'I am currently channeling my enthusiasm into the development of robust and scalable applications, with a primary focus on full-stack development. On the backend, I am proficient in Java, leveraging its versatility to build reliable and efficient server-side logic. My journey into backend development has been an exhilarating exploration of the intricate dance between databases, REST APIs, and server-side logic.',
    'Complementing my backend expertise, I have immersed myself in frontend technologies, particularly Angular and TypeScript along with tailwind css and bootstrap-4. Crafting intuitive and user-friendly interfaces is not just a task for me; it is a passion. I enjoy the challenge of bringing designs to life, ensuring a seamless and enjoyable experience for users.',
    'As I navigate this exciting chapter of my career, I am eager to tackle new challenges, learn from experiences, and contribute meaningfully to the ever-evolving tech landscape. ',
    'Thank you for taking the time to get to know me a little better. Lets build something incredible!',
  ];

  constructor( ){}
   
  ngOnInit(): void {
    this.applyAnimation();
  }
   
  private applyAnimation(): void {
    setTimeout(() => {
      const sentences = document.querySelectorAll('.animated-sentence');
      sentences.forEach((sentence, index) => {
        setTimeout(() => {
          sentence.classList.add('show');
        }, index * 500); // Adjust the delay as needed
      });
    });
  }

}
