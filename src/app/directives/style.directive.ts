import {Directive,ElementRef,HostListener,Renderer2,Input,HostBinding} from '@angular/core';

// @ts-ignore
@Directive({
  selector: '[appStyle]'
})
export  class StyleDirective{
  @Input('appStyle') color: string = 'blue'
  @Input() dStyles: { border?:string, fontWeight?:string, borderRadius?:string}

  @HostBinding('style.color') elColor = null
  @HostBinding('class') elClass = null

    constructor(private el: ElementRef, private  renderer: Renderer2) {
      // el.nativeElement.style.color = 'red'

      // Renderer2 do some modifications with element not only in web
      this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  // Add event click
  @HostListener('click', ['$event.target']) onClick(event: Event){
  console.log(event)
    this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow')
  }

  @HostListener('mouseenter', ['$event.target']) onEnter(){
  this.elColor = this.color
    this.elClass = "s"
  //this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    //this.renderer.setStyle(this.el.nativeElement, 'font-size', '32px')
    //this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight)
   // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
    //this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
  }

  @HostListener('mouseleave', ['$event.target']) onLeave() {
    this.elColor = null
    this.elClass = null

    // this.renderer.setStyle(this.el.nativeElement, 'color', null)
    //this.renderer.setStyle(this.el.nativeElement, 'font-size', null)
   //this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null)
    //this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null)
    //this.renderer.setStyle(this.el.nativeElement, 'border', null)

  }
}
