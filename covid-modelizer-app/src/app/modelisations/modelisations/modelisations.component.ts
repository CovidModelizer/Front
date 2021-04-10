import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from '../../shared/event-emitter.service';

@Component({
  selector: 'app-modelisations',
  templateUrl: './modelisations.component.html',
  styleUrls: ['./modelisations.component.css']
})
export class ModelisationsComponent implements OnInit {

  constructor(private router: Router, private eventEmitterService: EventEmitterService) {
  }

  ngOnInit(): void {
  }

  goTo(path: string): void {
    this.router.navigate([path]);
    let pageTitle = this.setPageTitleByPath(path);
    this.eventEmitterService.onModelisationsComponentButtonClick(pageTitle);
  }

  private setPageTitleByPath(path: string) {
    let pageTitle = '';
    if(path === 'cas') {
      pageTitle = 'Infections';
    } else if(path === 'vaccin') {
      pageTitle = 'Vaccinations';
    } else {
      // ERROR
    }
    return pageTitle;
  }



}
