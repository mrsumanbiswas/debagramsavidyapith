import { Component, OnInit } from '@angular/core';
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
      this.storage.uploadFile('photos', Date.now().toString(), this.fileData, 'realtime')
        .on('state_changed',
          (snapshot) => {
            this.uploadfraction = (snapshot.bytesTransferred / snapshot.totalBytes);
          }
        )

    } else {
      alert(
        'Please sign-in to upload a photo'
      );

    }
  }

}
