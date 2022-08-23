import { Component } from '@angular/core';
import { homePage } from 'src/app/models/home-page-data';
import { FirestoreDatabaseService } from 'src/app/services/firestore-database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data!: homePage | any;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  constructor(
    firestore_database: FirestoreDatabaseService) {
    // home page data pulling from google firestore datbase
    firestore_database.getData('page', 'home').then(
      (value) => {
        this.data = value
      }
    )
  }

}
