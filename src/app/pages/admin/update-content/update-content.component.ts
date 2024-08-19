import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ContentService } from 'src/app/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.css'],
})
export class UpdateContentComponent implements OnInit {
  maxFileSizeMB: number = 8;
  constructor(
    private _route: ActivatedRoute,
    private _content: ContentService,
    private _cat: CategoryService,
    private _router: Router
  ) {}

  conId = 0;
  content: any;
  categories: any;
  originalContent: any;
  // updatedImageFile: File | undefined = undefined;
  conImageFile: File | undefined = undefined;
  ngOnInit(): void {
    this.conId = this._route.snapshot.params['conId'];
    alert(this.conId);
    this._content.getContent(this.conId).subscribe(
      (data: any) => {
        this.content = data;
        this.originalContent = data; // Store original data
        // console.log(this.originalContent);
        // console.log(this.content);
      },
      (error) => {
        console.log(error);
      }
    );
    this._cat.Categories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        alert('Error in loading categories');
      }
    );
  }
  // Handle file change for updated image
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   this.conImageFile = file;
  // }
  onFileSelected(event: any): void {
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
        this.conImageFile = file;
      }
    }
  }

  updateData(): void {
    if (!this.content) {
      return; // Handle case where content is not loaded yet
    }

    const formData = new FormData();
    formData.append(
      'content',
      new Blob([JSON.stringify(this.content)], { type: 'application/json' })
    );
    if (this.conImageFile) {
      formData.append(
        'conImageFile',
        this.conImageFile,
        this.conImageFile.name
      );
    }

    this._content.updateContent(formData).subscribe(
      (data) => {
        Swal.fire('Success', 'Content updated successfully', 'success').then(
          () => {
            this._router.navigate(['/admin/contents']);
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
