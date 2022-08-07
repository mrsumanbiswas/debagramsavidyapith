import { Component, OnInit } from '@angular/core';
import { homePage } from 'src/app/models/home-page-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: homePage={
    slide_imgs: [],
    overview: '',
    notice: '',
    latest_news: {
      academics: {
        img: '',
        details: ''
      },
      athletics: {
        img: '',
        details: ''
      },
      campus_life: {
        img: '',
        details: ''
      }
    },
    events: [],
    featured_gallery: []
  };

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  constructor() {}

  ngOnInit(): void {
    this.data.slide_imgs = [
      { img: '../assets/school images/school.jpeg', details: "ssssssssssssssssssssss" },
      { img: '../assets/background.jpg', details: "Theeeeeeeeeeeeeeee" },
    ]
    this.data.overview = "The test"
  }

}
