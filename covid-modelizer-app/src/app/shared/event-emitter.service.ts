import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';    

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeChangePageTitleFunction = new EventEmitter();    
  subsVar: Subscription;

  constructor() { 
    this.subsVar = new Subscription();
  }

  onModelisationsComponentButtonClick(titre: string) {    
    this.invokeChangePageTitleFunction.emit(titre);    
  }
}
