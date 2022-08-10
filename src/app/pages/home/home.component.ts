import { Component, OnInit } from '@angular/core';
import { homePage } from 'src/app/models/home-page-data';
import { PageDataService } from '../../services/page-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: homePage | any;

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
      )
    )
  }

  ngOnInit(): void {

  }

}
