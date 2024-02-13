import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ContentService } from 'src/app/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.css']
})
export class UpdateContentComponent implements OnInit{
  constructor(private _route:ActivatedRoute, 
    private _content:ContentService, 
    private _cat:CategoryService,
    private _router:Router) {}

  conId=0;
   content: any;
  categories:any;
  // updatedImageFile: File | undefined = undefined;
  conImageFile: File | undefined = undefined;
  ngOnInit(): void {

    this.conId=this._route.snapshot.params['conId'];
    alert(this.conId);
    this._content.getContent(this.conId).subscribe(
      (data:any)=>{
        this.content=data;
        console.log(this.content);
      },
      (error)=>{
        console.log(error);
      }
    );
    this._cat.Categories().subscribe((data: any)=>{
      this.categories= data;
    },
    (error)=>{
      alert("Error in loading categories");
    });
    
  }
  // Handle file change for updated image
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.conImageFile = file;
  }


  //update Quiz
  public updateData(){

    const formData = new FormData();

    // Append existing content data
    formData.append('conId', this.content.conId);
    formData.append('title', this.content.title);
    formData.append('description', this.content.description);
    formData.append('link_url', this.content.link_url);
    formData.append('category.cid', this.content.category.cid.toString());
    formData.append('active', this.content.active.toString());

    // If updated image file is provided, append it
    if (this.conImageFile !== null && this.conImageFile !== undefined) {
      formData.append('conImageFile', this.conImageFile);
    }


      // Call the service to update content
      this._content.updateContent(formData, this.conImageFile).subscribe(
        (data) => {
          Swal.fire('Success !!!', 'Content updated', 'success').then((e) => {
            this._router.navigate(['/admin/contents']);
          });
        },
        (error) => {
          Swal.fire('Error', 'Error in updating Content', 'error');
        }
      );
  }

}


