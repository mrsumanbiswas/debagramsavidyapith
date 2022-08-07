import { Injectable } from '@angular/core';
import { collection, collectionData, doc, DocumentData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  constructor(private afs: Firestore) { }



  // Get Page Data
  public getPageData(pageName: string): Observable<DocumentData> {
    return collectionData(collection(this.afs, `page-data/${pageName}`), { idField: 'id' })
  }

  // Set Page Data
  updatePageData(pageName: string, pageData: {}) {
    return updateDoc(doc(this.afs, `page-data/${pageName}`), pageData)
    // .catch((err) => console.log(err))
  }

}
