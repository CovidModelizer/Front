import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MenuItems} from '../../../shared/menu-items/menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements OnDestroy {

  // Changement dynamique du titre de la page
  @Output('parentFunction') parentFunction: EventEmitter<any> = new EventEmitter();

  mobileQuery: MediaQueryList;

  // tslint:disable-next-line:variable-name
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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  setTitrePage(newTitre: string): void {
    this.parentFunction.emit(newTitre);
  }
}
