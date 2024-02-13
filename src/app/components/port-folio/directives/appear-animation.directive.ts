import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppearAnimation]'
})
export class AppearAnimationDirective implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    this.applyAnimation();
  }
  private applyAnimation() {
    const text = this.el.nativeElement.innerText;
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '');
    text.split('').forEach((letter: string, index: number) => {
      const span = this.renderer.createElement('span');
      this.renderer.appendChild(span, this.renderer.createText(letter));
      this.renderer.appendChild(this.el.nativeElement, span);

      // Add the 'animated-letter' class to each letter
      this.renderer.addClass(span, 'animated-letter');
    });
  }

}
