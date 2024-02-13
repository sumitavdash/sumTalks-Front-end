// import { ResponsiveDirective } from './responsive.directive';

// describe('ResponsiveDirective', () => {
//   it('should create an instance', () => {
//     const directive = new ResponsiveDirective();
//     expect(directive).toBeTruthy();
//   });
// });
import { ResponsiveDirective } from './responsive.directive';
import { TestBed } from '@angular/core/testing';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ElementRef } from '@angular/core';

describe('ResponsiveDirective', () => {
  it('should create an instance', () => {
    // Mock ElementRef
    const elementRefMock = {} as ElementRef;

    // Mock BreakpointObserver
    const breakpointObserverMock = {
      observe: (breakpoints: string[]) => ({
        subscribe: () => {}
      })
    } as BreakpointObserver;

    const directive = new ResponsiveDirective(elementRefMock, breakpointObserverMock);
    expect(directive).toBeTruthy();
  });
});
