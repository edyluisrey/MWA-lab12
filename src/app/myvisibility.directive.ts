import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input('hide') visibility:String;

  constructor(private e: ElementRef, private r: Renderer) { 
  }
  
  ngOnInit(){ // reached after all bound properties are initilized
    if(this.visibility=="true"){
      this.r.setElementStyle(this.e.nativeElement,'display','none');
    }
  }

  

}
