import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { ContentService } from 'src/app/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit{

  @ViewChild('fileInput') fileInput!: ElementRef;
  categories: any[] = [];

   contentData={
    title:'',
    description:'',
    conImage: null as File | null,
     link_url:'',
    active:'true',
  category: {
    cid:'',
  },
  };

  constructor(private _cat:CategoryService, private snack: MatSnackBar, private _content:ContentService) {}

  ngOnInit(): void {

    this._cat.Categories().subscribe(
      (data:any)=>{
        //categories load
        this.categories=data;
       console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !','error in loading data from server','error');
      }
    );
    
  }

  // Function to handle file input change
  onFileChange(event: any) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      const file: File = fileList[0];
      this.contentData.conImage = file;
    } else {
      // Handle the case where no file is selected
      console.error('No file selected');
    }
  }
  //add quiz
  addContent(){
     if(this.contentData.title.trim()=='' || this.contentData.title==null){
      this.snack.open("title Required !!", 'Ok',{
        duration:3000,
      });
      return;
     }
     if(this.contentData.description.trim()=='' || this.contentData.description==null){
      this.snack.open("description Required !!", 'Ok',{
        duration:3000,
      });
      return;
     }
     if (this.contentData.conImage == null) {
      this.snack.open('Content Image Required !!', 'Ok', {
        duration: 3000,
      });
      return;
    }
    //  if(this.contentData.link_url.trim()=='' || this.contentData.link_url==null){
    //   this.snack.open("link_url Required !!", 'Ok',{
    //     duration:3000,
    //   });
    //   return;
    //  }

     //validation.. for others


      // Create FormData
    const formData: FormData = new FormData();
    formData.append('title', this.contentData.title);
    formData.append('description', this.contentData.description);
    formData.append('conImageFile', this.contentData.conImage as File);
    // formData.append('link_url', this.contentData.link_url);
    formData.append('active', this.contentData.active);
    formData.append('category.cid', this.contentData.category.cid);


    // Set headers for file upload
    // const headers = new HttpHeaders({
    //   'Content-Type': 'multipart/form-data',
    // });
      
    console.log('FormData:', formData);

     //call server
     this._content.addContent(formData).subscribe(
      (_data: any)=>{
        Swal.fire('Success','Content Added HURRAY!','success');

        this.contentData.conImage = null;
        this.fileInput.nativeElement.value = null;


        //data clear
       this.contentData={
          title:'',
          description:'',
           conImage:  null,
           link_url:'',
          active:'true',
        category: {
          cid:'',
        },
        };
      },
      (error: any)=>{
        Swal.fire('Error!!','Error While Adding Content','error');
        console.log(error);
      }

     );
  }

}



