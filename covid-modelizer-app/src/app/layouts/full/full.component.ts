import {MediaMatcher} from '@angular/cdk/layout';
import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MenuItems} from '../../shared/menu-items/menu-items';
import { AppHeaderComponent } from './header/header.component';


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
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.initTitrePage();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit() {
  }

  setTitrePage(newTitre: string): void {
    // Ne pas avoir de soucis de chemin lorsqu'on passe de Vaccin à Infections (et vice-versa)
    if(this.header!= undefined) this.header.path_modelisations = newTitre.toLowerCase();
    this.titrePage = newTitre;

  }

  initTitrePage() {
    switch(window.location.pathname) {
      case '/modelisations': {
        this.setTitrePage('Modélisations');
        break;
      }
      case '/donnees-reelles': {
        this.setTitrePage('Informations générales');
        break;
      }
      case '/vaccin': {
        this.setTitrePage('Vaccinations');
        break;
      }
      case '/infections': {
        this.setTitrePage('Infections');
        break;
      }
      default: {
        // Pas possible ?
        break;
      }

    }
  }
}
