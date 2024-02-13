import { Injectable } from '@angular/core';
 
// import * as tsParticles from 'tsparticles';

// import { loadBigCirclesPreset } from 'tsparticles-preset-big-circles';

@Injectable({
  providedIn: 'root'
})
export class ParticleService {

  constructor() { }

  // loadParticlesPreset(): Promise<void> {
  //   return new Promise<void>((resolve) => {
  //     tsParticles.load('tsparticles', {
  //       fpsLimit: 60,
  //       backgroundMode: {
  //         enable: true,
  //         zIndex: 10,
  //       },
  //       particles: {
  //         number: {
  //           value: 80,
  //           density: {
  //             enable: true,
  //             area: 800,
  //           },
  //         },
  //         color: {
  //           value: [
  //             "#3998D0",
  //             "#2EB6AF",
  //             "#A9BD33",
  //             "#FEC73B",
  //             "#F89930",
  //             "#F45623",
  //             "#D62E32",
  //             "#EB586E",
  //             "#9952CF"
  //           ],
  //         },
  //         destroy: {
  //           mode: "split",
  //           split: {
  //             count: 1,
  //             factor: {
  //               value: 9,
  //               random: {
  //                 enable: true,
  //                 minimumValue: 4,
  //               },
  //             },
  //             rate: {
  //               value: 10,
  //               random: {
  //                 enable: true,
  //                 minimumValue: 5,
  //               },
  //             },
  //             particles: {
  //               collisions: {
  //                 enable: false,
  //               },
  //               destroy: {
  //                 mode: "none",
  //               },
  //               life: {
  //                 count: 1,
  //                 duration: {
  //                   value: 1,
  //                 },
  //               },
  //             },
  //           },
  //         },
  //         shape: {
  //           type: "circle",
  //           stroke: {
  //             width: 0,
  //             color: "#000000",
  //           },
  //           polygon: {
  //             sides: 5,
  //           },
  //           image: {
  //             src: "https://cdn.matteobruni.it/images/particles/github.svg",
  //             width: 100,
  //             height: 100,
  //           },
  //         },
  //         opacity: {
  //           value: 1,
  //           random: false,
  //           animation: {
  //             enable: false,
  //             speed: 1,
  //             minimumValue: 0.1,
  //             sync: false,
  //           },
  //         },
  //         size: {
  //           value: 15,
  //           random: {
  //             enable: true,
  //             minimumValue: 10,
  //           },
  //           animation: {
  //             enable: false,
  //             speed: 40,
  //             minimumValue: 0.1,
  //             sync: false,
  //           },
  //         },
  //         lineLinked: {
  //           enable: false,
  //           distance: 150,
  //           color: "#ffffff",
  //           opacity: 0.4,
  //           width: 1,
  //         },
  //         collisions: {
  //           enable: true,
  //           mode: "destroy",
  //         },
  //         move: {
  //           enable: true,
  //           speed: 7,
  //           direction: "none",
  //           random: false,
  //           straight: false,
  //           out_mode: "out",
  //           attract: {
  //             enable: false,
  //             rotateX: 600,
  //             rotateY: 1200,
  //           },
  //         },
  //       },
  //       interactivity: {
  //         detectsOn: "window",
  //         events: {
  //           onHover: {
  //             enable: false,
  //             mode: "repulse",
  //             parallax: {
  //               enable: false,
  //               force: 60,
  //               smooth: 10,
  //             },
  //           },
  //           onClick: {
  //             enable: true,
  //             mode: "push",
  //           },
  //           resize: true,
  //         },
  //         modes: {
  //           grab: {
  //             distance: 400,
  //             line_linked: {
  //               opacity: 1,
  //             },
  //           },
  //           bubble: {
  //             distance: 400,
  //             size: 40,
  //             duration: 2,
  //             opacity: 0.8,
  //           },
  //           repulse: {
  //             distance: 200,
  //           },
  //           push: {
  //             particles_nb: 1,
  //           },
  //           remove: {
  //             particles_nb: 2,
  //           },
  //         },
  //       },
  //       detectRetina: true,
  //     }, () => {
  //       resolve();
  //     });
  //   });
//}
}
