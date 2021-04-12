import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { AppHeaderComponent } from './header/header.component';
import { EventEmitterService } from '../../shared/event-emitter.service';


/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(AppHeaderComponent) header!: AppHeaderComponent;

  // Titre de page dynamique
  titrePage = '';
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private eventEmitterService: EventEmitterService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.initTitrePage();

    this.eventEmitterService.subsVar = this.eventEmitterService.invokeChangePageTitleFunction.subscribe((title: string) => {
      this.setTitrePage(title);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit() {
  }

  setTitrePage(newTitre: string): void {
    // Ne pas avoir de soucis de chemin lorsqu'on passe de Vaccin à Infections (et vice-versa)
    if (this.header != undefined) this.header.path_modelisations = newTitre.toLowerCase();
    this.titrePage = newTitre;

  }

  initTitrePage() {
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
        // Pas possible ?
        break;
      }
    }
  }
}
