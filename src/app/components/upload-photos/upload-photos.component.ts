import { Component, OnInit } from '@angular/core';
import { RealtimeDatabaseService } from 'src/app/services/realtime-database.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.scss']
})
export class UploadPhotosComponent implements OnInit {
  uploadfraction!: number;
  fileData!: File;

  constructor(
    private storage: StorageService,
    private database: RealtimeDatabaseService
  ) { }

  ngOnInit(): void { }

  photoSelected(files: FileList | null) {
    const file = files?.item(0)
    if (file !== null && file !== undefined) {
      this.fileData = file
    }

  }

  // uploads photo to storage and creates a data to the realtime database
  uploadPhoto() {
    if (
      sessionStorage.getItem('isLogedIn') === 'false'
    ) {
      this.storage.uploadFile('photos', Date.now().toString(), this.fileData)
        .then(
          (snapshot) => {
            this.database.writeData('photos', snapshot.metadata.name, {
              vote: 0,
              name: snapshot.metadata.name,
              uid: localStorage.getItem('uid'),
              url: sessionStorage.getItem('photo_url_' + snapshot.metadata.name),
              timestamp: snapshot.metadata.timeCreated
            })
          },
          (err) => { console.log(err); }
        )
    } else {
      alert(
        'Please sign-in to upload a photo'
      );

    }
  }

}
