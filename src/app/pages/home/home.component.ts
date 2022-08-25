import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { homePage } from 'src/app/models/home-page-data';
import { FirestoreDatabaseService } from 'src/app/services/firestore-database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data!: homePage | any;

  // displayed columns
  displayedColumns: string[] = [
    'i',
    'ii',
    'iii',
    'iv',
    'v'
  ];

  // slider config
  slider_image = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500
  };

  // form group and it's validations
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.email],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  constructor(
    firestore_database: FirestoreDatabaseService,
    private _formBuilder: FormBuilder
  ) {
    // home page data pulling from google firestore datbase
    firestore_database.getData('page', 'home').then(
      (value) => {
        this.data = value;
      }
    )
  }

  ngOnInit(): void {
    // slide config
    let x = 1, y = 1;
    if (innerWidth >= 1024) {
      x = 4;
      y = 2;
    } else if (innerWidth < 1024 && innerWidth > 425) {
      x = 2;
      y = 1;
    }
    this.slideConfig.slidesToShow = x;
    this.slideConfig.slidesToScroll = y;
  }
}