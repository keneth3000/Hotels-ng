import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent{
  public claseDark = false;
  constructor(private elementRef:ElementRef){}

  cambiar(){
    this.claseDark = !this.claseDark;
    this.elementRef.nativeElement.ownerDocument.body.classList.toggle('dark');

    //Guardar en el localStorage
    if(this.elementRef.nativeElement.ownerDocument.body.classList.contains('dark')){
      localStorage.setItem('dark-mode', 'true');
    }else{
      localStorage.setItem('dark-mode', 'false');
    }
  }

  getStorage():boolean{
    if(localStorage.getItem('dark-mode') === 'true'){
      this.elementRef.nativeElement.ownerDocument.body.classList.add('dark');
      return this.claseDark = true;
    }else{
      this.elementRef.nativeElement.ownerDocument.body.classList.remove('dark');
      return this.claseDark = false;
    }
  }

}
