import { Injectable } from '@angular/core';
import { deleteDoc, doc, DocumentSnapshot, Firestore, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDatabaseService {

  // Set Data
  setData(base_url: string, id: string, data: any) {
    setDoc(doc(this.database, `${base_url}/${id}`), data)
      .then(
        (value) => {
          console.log(value);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  // Get Data
  getData(base_url: string, id: string): Promise<DocumentSnapshot> {
    return getDoc(doc(this.database, `${base_url}/${id}`))
  }

  
  // Update Data	
  updateData(base_url: string, id: string, data: any) {
    updateDoc(doc(this.database, `${base_url}/${id}`), data)
      .then(
        (value) => {
          console.log(value);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  // Delete Data
  deleteData(base_url: string, id: string) {
    deleteDoc(doc(this.database, `${base_url}/${id}`))
      .then(
        (value) => {
          console.log(value);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  constructor(private database: Firestore) { }

}
