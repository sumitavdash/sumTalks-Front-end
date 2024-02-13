 // animation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// export class AnimationService {
//   private playAnimationSubject = new BehaviorSubject<boolean>(false);

//   get playAnimation$() {
//     return this.playAnimationSubject.asObservable();
//   }

//   triggerAnimation() {
//     this.playAnimationSubject.next(true);
//   }
// }
export class AnimationService {
  private playAnimationSubject = new BehaviorSubject<boolean>(false);

  get playAnimation$() {
    return this.playAnimationSubject.asObservable();
  }

  triggerAnimation() {
    this.playAnimationSubject.next(true);
  }
}