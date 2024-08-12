import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ContentService } from 'src/app/services/content.service';
import { DetailedContentsService } from 'src/app/services/detailed-contents.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-detailed-contents',
  templateUrl: './update-detailed-contents.component.html',
  styleUrls: ['./update-detailed-contents.component.css'],
})
export class UpdateDetailedContentsComponent implements OnInit {
  maxFileSizeMB: number = 5;
  constructor(
    private _route: ActivatedRoute,
    private _detailedcontent: DetailedContentsService,
    private _content: ContentService,
    private _router: Router
  ) {}

  //public Editor=ClassicEditor;
  public Editor: any = ClassicEditor;
  detailedconId = 0;
  contents: any;
  detailedcontent: any;
  // detailedcontent = {
  //   content: {
  //     conId: '',
  //   },
  //   title: '',
  //   detailedconId:'',
  //   description: '',
  //   dc_link: '',
  //   dc_imageFile: null as File | null,
  //   dc_audioFile: null as File | null,
  // };

  dc_imageFile: File | undefined = undefined;
  dc_audioFile: File | undefined = undefined;

  ngOnInit(): void {
    this.detailedconId = this._route.snapshot.params['detailedconId'];
    alert(this.detailedconId);
    this._detailedcontent
      .getSingleDetailedContent(this.detailedconId)
      .subscribe(
        (data: any) => {
          this.detailedcontent = data;
          console.log(this.detailedcontent);
        },
        (error) => {
          console.log(error);
        }
      );
    this._content.getActiveContents().subscribe(
      (data: any) => {
        this.contents = data;
      },
      (error) => {
        alert('Error in loading active contents');
      }
    );
  }

  onImageSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
        // Notify user if image format is invalid
        alert('Only JPEG and PNG images are allowed.');
        // Optionally clear the selected file
        event.target.value = null;
      } else if (file.size > this.maxFileSizeMB * 1024 * 1024) {
        // Notify user if file size exceeds limit
        alert(`File size exceeds ${this.maxFileSizeMB} MB limit.`);
        // Optionally clear the selected file
        event.target.value = null;
      } else {
        this.dc_imageFile = file;
      }
    }
  }

  onAudioSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const fileType = file.type;
      if (!fileType.startsWith('audio/')) {
        // Notify user if audio format is invalid
        alert('Invalid audio file format. Please upload a valid audio file.');
        // Optionally clear the selected file
        event.target.value = null;
      } else if (file.size > this.maxFileSizeMB * 1024 * 1024) {
        // Notify user if file size exceeds limit
        alert(`File size exceeds ${this.maxFileSizeMB} MB limit.`);
        // Optionally clear the selected file
        event.target.value = null;
      } else {
        this.dc_audioFile = file;
      }
    }
  }

  // updateData(): void {
  //   if (!this.content) {
  //     return; // Handle case where content is not loaded yet
  //   }

  //   const formData = new FormData();
  //   formData.append('content', new Blob([JSON.stringify(this.content)], { type: 'application/json' }));
  //   if (this.conImageFile) {
  //     formData.append('conImageFile', this.conImageFile, this.conImageFile.name);
  //   }

  //   this._content.updateContent(formData).subscribe(
  //     (data) => {
  //       Swal.fire('Success', 'Content updated successfully', 'success').then(() => {
  //         this._router.navigate(['/admin/contents']);
  //       });
  //     },
  //     (error) => {
  //       console.error('Error updating content:', error);
  //       if (error.status === 400) {
  //         Swal.fire('Error', 'Invalid file format or file size exceeded', 'error');
  //       } else {
  //         Swal.fire('Error', 'Error updating content', 'error');
  //       }
  //     }
  //   );
  // }

  //update Quiz
  updateDeatiledContent(): void {
    if (!this.detailedcontent) {
      return; // Handle case where content is not loaded yet
    }

    const formData = new FormData();
    formData.append(
      'detailedcontent',
      new Blob([JSON.stringify(this.detailedcontent)], {
        type: 'application/json',
      })
    );
    if (this.dc_imageFile) {
      formData.append(
        'dc_imageFile',
        this.dc_imageFile,
        this.dc_imageFile.name
      );
    }
    if (this.dc_audioFile) {
      formData.append(
        'dc_audioFile',
        this.dc_audioFile,
        this.dc_audioFile.name
      );
    }

    // Call the service to update content
    this._detailedcontent.updateDetailedContent(formData).subscribe(
      (data) => {
        Swal.fire('Success !!!', 'DetailedContent updated', 'success').then(
          (e) => {
            this._router.navigate([
              '/admin/view-detailedcontents',
              this.detailedcontent.content.conId,
              this.detailedcontent.content.title,
            ]);
            // this._router.navigate(['/admin/view-detailedcontents', this.conId, this.qTitle]);
          }
        );
      },
      (error) => {
        console.error('Error updating content:', error);
        if (error.status === 400) {
          Swal.fire(
            'Error',
            'Invalid file format or file size exceeded',
            'error'
          );
        } else {
          Swal.fire('Error', 'Error updating content', 'error');
        }
      }
    );
  }
}
