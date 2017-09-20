import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  colors :string[]= ['red','blue','yellow'];
  index:number=0;
  constructor(private e: ElementRef, private r: Renderer) {}

  @HostListener('click') cc(){    
	  this.myColor = this.colors[this.index]; 
      //this.e.nativeElement.style.color = this.myColor;
	  this.index++;
	  if (this.index >this.colors.length-1){
	    this.index=0;
	  }
   }

  //@HostBinding('myColor') color: String; 
  @HostBinding('style.color') myColor;
}
