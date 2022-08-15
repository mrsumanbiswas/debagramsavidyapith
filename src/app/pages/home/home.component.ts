import { Component } from '@angular/core';
import { homePage } from 'src/app/models/home-page-data';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: homePage | any = {
    slide_imgs: [
      {img:""}
    ],
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

  constructor(private database: DatabaseService) {

    database.writeData('page','home',this.data)

  }

}
