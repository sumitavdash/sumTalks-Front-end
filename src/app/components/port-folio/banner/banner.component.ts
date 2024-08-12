import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import {
  ClickMode,
  CollisionMode,
  Container,
  Engine,
  HoverMode,
  InteractivityDetect,
  MoveDirection,
  OutMode,
} from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  // id = 'tsparticles';

  // particlesUrl = 'http://foo.bar/particles.json';

  particlesOptions = {
    fpsLimit: 60,
    backgroundMode: {
      enable: true,
      zIndex: 10,
    },
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: [
          '#3998D0',
          '#2EB6AF',
          '#A9BD33',
          '#FEC73B',
          '#F89930',
          '#F45623',
          '#D62E32',
          '#EB586E',
          '#9952CF',
          // '#F48FB1',
          // '#F06292',
          // '#F8BBD0',
          // '#EC407A',
          '#E91E63',
          // '#FF80AB',
        ],
      },
      destroy: {
        mode: 'split',
        split: {
          count: 1,
          factor: {
            value: 9,
            random: {
              enable: true,
              minimumValue: 4,
            },
          },
          rate: {
            value: 10,
            random: {
              enable: true,
              minimumValue: 5,
            },
          },
          particles: {
            collisions: {
              enable: false,
            },
            destroy: {
              mode: 'none',
            },
            life: {
              count: 1,
              duration: {
                value: 1,
              },
            },
          },
        },
      },
      shape: {
        type: 'triangle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          sides: 5,
        },
        image: {
          src: 'https://cdn.matteobruni.it/images/particles/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: false,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: 10,
        random: {
          enable: true,
          minimumValue: 10,
        },
        animation: {
          enable: false,
          speed: 40,
          minimumValue: 0.1,
          sync: false,
        },
      },
      lineLinked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: true,
        mode: 'destroy' as CollisionMode,
      },
      move: {
        enable: true,
        speed: 5,
        direction: 'none' as MoveDirection,
        random: false,
        straight: false,
        out_mode: 'out' as OutMode,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectsOn: 'canvas' as InteractivityDetect,
      events: {
        onHover: {
          enable: false,
          mode: 'repulse',
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 1,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    detectRetina: true,
  };
  // @HostBinding('class.pc') pcMode=false;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.createSpiralDots();
    // this.particleService.loadParticlesPreset().then(() => {
    // The particles are loaded, you can perform any additional tasks here if needed
    // });
    // without directive if u are applying different responsiveness
    // to different coponet then coment lines approach required

    // this.breakpointObserver.observe([Breakpoints.HandsetPortrait,Breakpoints.WebLandscape]).subscribe({
    //   next: (result: any) =>{
    //     for(let breakpoint of  Object.keys(result.breakpoints)){
    //       if(result.breakpoint[breakpoint]){
    //         if(breakpoint === Breakpoints.HandsetPortrait){

    //           this.pcMode=false;

    //         }
    //         if(breakpoint === Breakpoints.WebLandscape){

    //           this.pcMode=true;

    //         }
    //       }
    //     }

    //   },
    // });
  }
  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }
  createSpiralDots(): void {
    const container = document.querySelector('.spiral-dots');
    if (container) {
      const numDots = 30;
      const radius = 100;

      for (let i = 0; i < numDots; i++) {
        const dot = this.renderer.createElement('div');
        this.renderer.setStyle(dot, 'position', 'absolute');
        this.renderer.setStyle(dot, 'width', '10px');
        this.renderer.setStyle(dot, 'height', '10px');
        this.renderer.setStyle(dot, 'background-color', '#ec407a');
        this.renderer.setStyle(dot, 'border-radius', '50%');
        // #ec407a
        const angle = (i / numDots) * 2 * Math.PI;
        const left = `${50 + radius * Math.cos(angle)}%`;
        const top = `${50 + radius * Math.sin(angle)}%`;

        this.renderer.setStyle(dot, 'left', left);
        this.renderer.setStyle(dot, 'top', top);
        this.renderer.setStyle(dot, 'animation-delay', `${(i / numDots) * 5}s`);

        this.renderer.appendChild(container, dot);
      }
    }
  }
}
