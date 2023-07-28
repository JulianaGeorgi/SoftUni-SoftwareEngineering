import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { imageUrlValidator } from './url.validator';

@Directive({
  selector: '[appUrl]', 
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: UrlDirective, 
    multi: true,
  }]
})
export class UrlDirective implements Validator, OnChanges{
  
  @Input() appUrl: string[] = [];
  validator: ValidatorFn = () => null; // validator fns return null as a default case

  constructor() { }
 
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    const urlChanges = changes['appUrl'];
    if (urlChanges){
      this.validator = imageUrlValidator(urlChanges.currentValue);
    }
  }
}
