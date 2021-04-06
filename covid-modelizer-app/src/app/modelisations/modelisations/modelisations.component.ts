import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelisations',
  templateUrl: './modelisations.component.html',
  styleUrls: ['./modelisations.component.css']
})
export class ModelisationsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }

}
