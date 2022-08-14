import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search_quary!: string;

  window_width!: number;

  ngOnInit() {
    this.window_width = window.innerWidth;
  }

  constructor() { }
}
