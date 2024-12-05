import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]',
  standalone: true
})
export class NumberonlyDirective {

  constructor() { }
  @HostListener('keydown',['$event'])  
  onKeyDown(event:KeyboardEvent){
    console.log(event,'e');
    const allowedBtn=['Backspace','Tab']
    if((event.key >='0' && event.key <='9')|| (event.key >='Numpad0' && event.key <= 'Numbad9'|| allowedBtn.includes(event.key))){
      return 
    }
    else{
      event.preventDefault()

    }
    

  }

}
