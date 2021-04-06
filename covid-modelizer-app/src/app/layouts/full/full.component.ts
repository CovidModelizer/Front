import {MediaMatcher} from '@angular/cdk/layout';
import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItems} from '../../shared/menu-items/menu-items';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullComponent implements OnInit, OnDestroy, AfterViewInit {

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
      case 'TODO': {
        this.setTitrePage('TODO');
        break;
      }
      default: {
        // Pas possible ?
        break;
      }

    }
  }
}
