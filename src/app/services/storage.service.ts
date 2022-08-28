import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytesResumable, deleteObject } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  uploadFile(base_path: string, id: string, fileData: File) {
    const Ref = ref(this.storage, `${base_path}/${id}`);
    // Upload file 
    const uploadTask = uploadBytesResumable(
      Ref,
      fileData, { contentType: fileData.type, customMetadata: { name: fileData.name, size: fileData.size.toString(), lastModified: fileData.lastModified.toString() } }
    );

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        sessionStorage.setItem('photo_progress', progress.toString())
        console.log('Upload is ' + progress + '% done');
        // tells about the state of the file upload
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
            console.log('storage/unauthorized');
            break;
          case 'storage/canceled':
            // User canceled the upload
            console.log('storage/canceled');
            break;

          // ...
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            console.log('storage/unknown');
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          sessionStorage.setItem('photo_url_' + uploadTask.snapshot.metadata.name, downloadURL)
        });
      }
    )

    return uploadTask;
  }

  deleteFile(base_path: string, id: string) {
    // Delete the file
    deleteObject(
      ref(
        this.storage,
        `${base_path}/${id}`
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