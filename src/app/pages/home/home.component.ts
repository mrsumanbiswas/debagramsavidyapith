import { Component, OnInit } from '@angular/core';
import { homePage } from 'src/app/models/home-page-data';
import { PageDataService } from '../../services/page-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: homePage | any = {
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

  constructor(private PageData: PageDataService) {

    this.PageData.getPageData('home-page').then(
      (value) => (
        this.data = value.data()
      ),
      (err) => (console.log(err))
    )
  }

}
