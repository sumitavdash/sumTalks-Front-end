import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DetailedContentsService } from 'src/app/services/detailed-contents.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-detailed-contents',
  templateUrl: './add-detailed-contents.component.html',
  styleUrls: ['./add-detailed-contents.component.css']
})
export class AddDetailedContentsComponent implements OnInit{

  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('audioInput') audioInput!: ElementRef;
  public Editor=ClassicEditor;
  conId: any;
  qTitle: any;
  detailedcontent={
    content:{
      conId: '',

    },
    title: '',
    description: '',
    dc_link: '',  // Updated field name
    dc_imageFile: null as File | null,
    dc_audioFile: null as File | null,
  };
  
 
  constructor(private _route:ActivatedRoute, private _detailedcontent:DetailedContentsService){}

  ngOnInit(): void {
    this.conId=this._route.snapshot.params['conId'];
    this.qTitle=this._route.snapshot.params['title'];
    // console.log(this.qId);
    console.log(this.conId, this.qTitle);
    this.detailedcontent.content['conId']=this.conId;
  }

  onImageSelected(event: any): void {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      const file: File = fileList[0];
      this.detailedcontent.dc_imageFile = file;
    } else {
      // Handle the case where no file is selected
      console.error('No file selected');
    }
  }

  onAudioSelected(event: any): void {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      const file: File = fileList[0];
      this.detailedcontent.dc_audioFile = file;
    } else {
      // Handle the case where no file is selected
      console.error('No file selected');
    }
  }

  formSubmit(){
    // alert("testing");
    if(this.detailedcontent.description.trim()=='' ||this.detailedcontent.description==null){
      return;
    }
    if(this.detailedcontent.title.trim()=='' ||this.detailedcontent.title==null){
      return;
    }
     

    const formData = new FormData();
    formData.append('title', this.detailedcontent.title);
    formData.append('description', this.detailedcontent.description);
    formData.append('dc_link', this.detailedcontent.dc_link);  // Updated field name
    formData.append('content.conId', this.detailedcontent.content.conId);

    formData.append('dc_imageFile', this.detailedcontent.dc_imageFile as File);

    if (this.detailedcontent.dc_audioFile) {
      formData.append('dc_audioFile', this.detailedcontent.dc_audioFile);
    }

    console.log('FormData:', formData);
    //form submit
    this._detailedcontent.addDetailedContent(formData).subscribe((data:any)=>{
      Swal.fire('Success', 'Detaildcontent Added', 'success');
        this.detailedcontent.title = '';
        this.detailedcontent.description = '';
        this.detailedcontent.dc_link = '';  // Updated field name
        this. detailedcontent. dc_imageFile = null;
        this.fileInput.nativeElement.value = '';  // Clear image file input
        this. detailedcontent. dc_audioFile = null;
        this.audioInput.nativeElement.value = '';  // Clear audio file input


      },
    (error)=>{

      Swal.fire('Error','Error In Adding Details Contents','error');
    });
  }
}


