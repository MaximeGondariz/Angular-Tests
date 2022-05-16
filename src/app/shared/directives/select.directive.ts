import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges } from "@angular/core";

@Directive({
    selector: '[Selector]'
})
export class SelectDirective implements OnChanges {

    @Input()
    Selector = false;

  @HostBinding('style') style: any;

  ngOnChanges() {
    if (this.Selector) {
        this.style = {
            background: "green",
        };
    }
    else {
      this.style = {};
    }
  }

  constructor(private el: ElementRef<HTMLElement>) { 
    el.nativeElement.style.transition = "all 300ms ease-out";
  }

  @HostListener('mouseover')
  onMouseover() {
    this.el.nativeElement.style.transform = "scale(1.2)"
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.el.nativeElement.style.transform = "scale(1)"
  }
}