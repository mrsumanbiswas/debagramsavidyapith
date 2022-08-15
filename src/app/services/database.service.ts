import { Injectable } from '@angular/core';
import {
  ref,
  set,
  get,
  push,
  child,
  remove,
  update,
  Database,
  DataSnapshot
} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  writeData(base_url: string, id: string, value: any) {
    set(child(ref(this.database), `${base_url}/${id}`), value)
      .catch((error) => {
        console.log(error);
      })
  }

  constructor(private database: Database) { }
}
