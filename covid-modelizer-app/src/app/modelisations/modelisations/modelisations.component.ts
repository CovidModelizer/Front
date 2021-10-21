import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventEmitterService} from '../../shared/event-emitter.service';

@Component({
  selector: 'app-modelisations',
  templateUrl: './modelisations.component.html',
  styleUrls: ['./modelisations.component.css']
})
export class ModelisationsComponent implements OnInit {

  constructor(private router: Router, private eventEmitterService: EventEmitterService) {
  }

  private static setPageTitleByPath(path: string): string {
    let pageTitle;
    if (path === 'infections') {
      pageTitle = 'Infections';
    } else if (path === 'vaccinations') {
      pageTitle = 'Vaccinations';
    } else {
      pageTitle = 'Error';
    }
    return pageTitle;
  }

  ngOnInit(): void {
  }

  goTo(path: string): void {
    this.router.navigate([path]);
    const pageTitle = ModelisationsComponent.setPageTitleByPath(path);
    this.eventEmitterService.onModelisationsComponentButtonClick(pageTitle);
  }
}
