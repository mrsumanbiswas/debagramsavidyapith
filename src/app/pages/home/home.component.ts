import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    { img: '../assets/school images/school.jpeg' },
    { img: '../assets/background.jpg' },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000
  };

  constructor() { }

  ngOnInit(): void {
  }

}
