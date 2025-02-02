import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appElementPadding]'
})
// Directive for adding padding on y-axis when Window is Scrolling (specific for navbar).
export class ElementPaddingDirective {
  constructor(private element:ElementRef) { 
  }
  @HostListener('window:scroll') onScroll(){
    if(scrollY>0){
      this.element.nativeElement.classList.remove('py-3');
    }else{
      this.element.nativeElement.classList.add('py-3');
    }
  }
}
