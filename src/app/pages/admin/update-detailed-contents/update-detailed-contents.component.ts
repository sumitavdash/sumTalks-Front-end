import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ContentService } from 'src/app/services/content.service';
import { DetailedContentsService } from 'src/app/services/detailed-contents.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-detailed-contents',
  templateUrl: './update-detailed-contents.component.html',
  styleUrls: ['./update-detailed-contents.component.css']
})
export class UpdateDetailedContentsComponent implements OnInit{
  

  constructor(private _route:ActivatedRoute, 
    private _detailedcontent:DetailedContentsService, 
    private _content:ContentService,
    private _router:Router){}

    public Editor=ClassicEditor;
    detailedconId=0;
    detailedcontent: any;
    contents:any;
   updatedImageFile: File | undefined = undefined;
   updatedAudioFile: File | undefined = undefined;
 


  ngOnInit(): void {

    this.detailedconId=this._route.snapshot.params['detailedconId'];
    alert(this.detailedconId);
    this._detailedcontent.getSingleDetailedContent(this.detailedconId).subscribe(
      (data:any)=>{
        this.detailedcontent=data;
        console.log(this.detailedcontent);
      },
      (error)=>{
        console.log(error);
      }
    );
    this._content.getActiveContents().subscribe((data: any)=>{
      this.contents= data;
    },
    (error)=>{
      alert("Error in loading categories");
    });
     
  }

   // Handle file change for updated image
   onImageSelected(event: any) {
    const file: File = event.target.files[0];
    this.updatedImageFile = file;
  }

  // Handle file change for updated image
  onAudioSelected(event: any) {
    const file: File = event.target.files[0];
    this.updatedAudioFile = file;
  }


  //update Quiz
  public  updateDeatiledContent(){

    const formData = new FormData();

    // Append existing content data
    formData.append('conId', this.detailedcontent.detailedconId);
    formData.append('title', this.detailedcontent.title);
    formData.append('description', this.detailedcontent.description);
    formData.append('link_url', this.detailedcontent.link_url);
    formData.append('category.cid', this.detailedcontent.category.cid.toString());
     
    // If updated image file is provided, append it
    if (this.updatedImageFile !== null && this.updatedImageFile !== undefined) {
      formData.append('updatedImageFile', this.updatedImageFile);
    }

    // If updated image file is provided, append it
    if (this.updatedAudioFile !== null && this.updatedAudioFile !== undefined) {
      formData.append('updatedAudioFile', this.updatedAudioFile);
    }


      // Call the service to update content
      this._detailedcontent.updateDetailedContent(formData, this.updatedImageFile).subscribe(
        (data) => {
          Swal.fire('Success !!!', 'DetailedContent updated', 'success').then((e) => {
            // this._router.navigate(['view-detailedcontents/:conId/:title']);
          });
        },
        (error) => {
          Swal.fire('Error', 'Error in updating Content', 'error');
        }
      );
  }

}


