import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appTest]'
})
export class TestDirective {

    constructor(private el: ElementRef<HTMLElement>) {
        el.nativeElement.style.transition = 'all 1s';
    }
    
    @HostListener('mouseenter')
        onHover() {
        this.zoom(true);
    }
    
    @HostListener('mouseleave')
        onMouseLeave() {
        this.zoom(false);
    }
    
    zoom(yes: boolean) {
        this.el.nativeElement.style.width = yes ? '8rem' : '';
        this.el.nativeElement.style.height = yes ? '8rem' : '';
    }
    
    

    // t = 15
    // grossir : any = ""

    // constructor(private el: ElementRef) {
    //     this.grossir = setInterval(() => {
    //         console.log(this.t)
    //         this.el.nativeElement.style.fontSize = this.t++ +"px"
    //     },1000)
    // }

    // @HostListener('click')
    // onclick(){
    //     this.t = 15
    //     this.el.nativeElement.style.fontSize = this.t+"px"
    //     clearInterval(this.grossir)
    // }
}