import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appVarCanvas]'
})
export class VarCanvasDirective {
  @Input('appVarCanvas') variableCanvas!: string;
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.dataset.myVariable = this.variableCanvas;
  }

}
