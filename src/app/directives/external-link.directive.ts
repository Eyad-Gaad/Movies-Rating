import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appExternalLink]'
})
// Directive for alert client when leaving the website.
export class ExternalLinkDirective {

  constructor(private element:ElementRef) { }
  @HostListener('click',['$event']) onClick(event:Event){
    let response =  window.confirm("Are You Sure To Leave !");
    if(!response){
      event.preventDefault();
    }
  }
}
