import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MenuItems} from '../../shared/menu-items/menu-items';
import {AppHeaderComponent} from './header/header.component';
import {EventEmitterService} from '../../shared/event-emitter.service';


/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullComponent implements OnInit {

  @ViewChild(AppHeaderComponent) header!: AppHeaderComponent;

  // Titre de page dynamique
  titrePage = '';
  mobileQuery: MediaQueryList;

  private readonly mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private eventEmitterService: EventEmitterService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.initTitrePage();
    this.eventEmitterService.subsVar = this.eventEmitterService.invokeChangePageTitleFunction.subscribe((title: string) => {
      this.setTitrePage(title);
    });
  }

  setTitrePage(newTitre: string): void {
    // Ne pas avoir de soucis de chemin lorsqu'on passe de Vaccin à Infections (et vice-versa)
    if (this.header !== undefined) {
      this.header.pathModelisations = newTitre.toLowerCase();
    }
    this.titrePage = newTitre;
  }

  initTitrePage(): void {
    switch (window.location.pathname) {
      case '/informations-generales': {
        this.setTitrePage('Informations générales');
        break;
      }
      case '/modelisations': {
        this.setTitrePage('Modélisations');
        break;
      }
      case '/infections': {
        this.setTitrePage('Infections');
        break;
      }
      case '/vaccinations': {
        this.setTitrePage('Vaccinations');
        break;
      }
      case '/eligibilite-vaccin': {
        this.setTitrePage('Se faire vacciner');
        break;
      }
      case '/api-documentation': {
        this.setTitrePage('API documentation');
        break;
      }
      default: {
        this.setTitrePage('Informations générales');
        break;
      }
    }
  }
}
