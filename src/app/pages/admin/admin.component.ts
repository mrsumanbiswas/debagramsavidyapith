import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { update } from '@firebase/database';
import { homePage } from 'src/app/models/home-page-data';
import { PageDataService } from '../../services/page-data.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  homePageData: homePage = {
    slide_imgs: [{
      img: '',
      details: ''
    }],
    overview: 'The great boy',
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
  }

  constructor(
    private pageData: PageDataService,
    private _formBuilder: FormBuilder
  ) { }

  homePage() {
    // return this.pageData.updatePageData('home-page', this.homePageData), console.log('done')
    return this.pageData.getPageData('home-page')
  }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

}
