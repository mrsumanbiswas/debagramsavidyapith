import { Injectable } from '@angular/core';
import { collection, collectionData, doc, DocumentData, DocumentSnapshot, Firestore, getDocs, updateDoc } from '@angular/fire/firestore';
import { DocumentReference, getDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  constructor(private afs: Firestore) { }



  // Get Page Data
  public getPageData(pageName: string): Promise<DocumentSnapshot> {
    return getDoc(doc(this.afs, `page-data/${pageName}`))
  }

  // Set Page Data
  updatePageData(pageName: string, pageData: {}) {
    return updateDoc(doc(this.afs, `page-data/${pageName}`), pageData)
      .catch((err) => console.log(err))
  }

}
