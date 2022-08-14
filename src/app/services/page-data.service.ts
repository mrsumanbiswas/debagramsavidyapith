import { Injectable } from '@angular/core';
import { doc, DocumentSnapshot, Firestore, updateDoc } from '@angular/fire/firestore';
import { getDoc } from '@firebase/firestore';

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
