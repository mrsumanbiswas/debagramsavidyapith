import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytesResumable, deleteObject } from '@angular/fire/storage';
import { fileData } from '../models/file-data';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  uploadFile(base_path: string, fileData: fileData) {
    // Upload file 
    const uploadTask = uploadBytesResumable(
      ref(this.storage, `${base_path}/${fileData.name}`),
      fileData.file
    )

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        })
      }
    )

    // Returning uploadTusk for further programs
    return uploadTask
  }

  deleteFile(base_path: string, fileData: fileData) {
    // Delete the file
    deleteObject(
      ref(
        this.storage,
        `${base_path}/${fileData.name}`
      )
    ).then(() => {
      // File deleted successfully
      console.log('file deleted successfully')
    }).catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
    });
  }

  constructor(private storage: Storage) { }
}