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


  displayedColumns: string[] = [
    'class-v',
    'class-vi',
    'class-vii-viii',
    'class-ix-x',
    'class-xi-xii'
  ];
  subjectData = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { name: '', weight: 1.0079, symbol: 'H' },
  { name: 'Helium', weight: 4.0026, symbol: 'He' },
  { name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { name: 'Boron', weight: 10.811, symbol: 'B' },
  { name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];