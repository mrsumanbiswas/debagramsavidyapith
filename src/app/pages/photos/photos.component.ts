import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadPhotosComponent } from 'src/app/components/upload-photos/upload-photos.component';
import { FirestoreDatabaseService } from 'src/app/services/firestore-database.service';
import { onValue, Database, ref } from '@angular/fire/database';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  postData!: {
    uid: string;
    url: string;
    size: number;
    vote: number;
    name: string;
    timestamp: string;
    displayName: string;
    photoURL: string;
  }[];

  constructor(
    private database: Database,
    private firestore: FirestoreDatabaseService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {  }

  // scrolls to TOP
  top() {
    window.scrollTo(0, 0)
  }

  // opens photo upload 
  openDialog(): void {
    this.dialog.open(UploadPhotosComponent, {
      width: '250px',
      enterAnimationDuration: '800ms',
      exitAnimationDuration: '1000ms',
      hasBackdrop: true
    });
  }

  // get User data
  private async getUserData(uid: string): Promise<{
    displayName: string;
    photoURL: string;
  }> {

    const data = await this.firestore.getData('user', uid)
    if (data) {
      return {
        displayName: data['displayName'],
        photoURL: data['photoURL']
      }
    } else {
      return {
        displayName: '',
        photoURL: ''
      }
    }
  }

  // get realtime post data 
  getData(){
    onValue(
      ref(this.database, 'photos'),
      (snapshot) => {
        snapshot.forEach(childsnapshot => {
          async () => {
            const post: {
              uid: string;
              url: string;
              size: number;
              vote: number;
              name: string;
              timestamp: string;
            } = childsnapshot.val();
            const user = await this.getUserData(post.uid);
            this.postData.push(
              {
                url: post.url,
                uid: post.uid,
                vote: post.vote,
                name: post.name,
                size: post.size,
                photoURL: user.photoURL,
                timestamp: post.timestamp,
                displayName: user.displayName,
              }
            );
          }
        });
      }
    )
  }
}
