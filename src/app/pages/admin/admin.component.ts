import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { homePage } from 'src/app/models/home-page-data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  homePageData!: homePage;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  homePage() {
    // return this.pageData.updatePageData('home-page', this.homePageData), console.log('done')
    // return this.pageData.getPageData('home-page')
  }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

}
