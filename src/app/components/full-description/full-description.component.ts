import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { DetailedContentsService } from 'src/app/services/detailed-contents.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-full-description',
  templateUrl: './full-description.component.html',
  styleUrls: ['./full-description.component.css']
})
export class FullDescriptionComponent implements OnInit{
   
  detailedContent: any;
  // detailedConId: any;
  // conId: any;
  // qTitle: any;
  // fullDescription: string = '';
  [x: string]: any;

  contents: {
    active: any;
    conId: number;
    title: string;
    category: {
      title: string;
    };
    description: string;
     conImage: string;
     link_url: string;
     
  }[] = [];


  constructor(private _route: ActivatedRoute, 
               private _detailedcontent: DetailedContentsService,private _content: ContentService) {}
  ngOnInit(): void {

    // this.conId = this._route.snapshot.params['conId'];
    // this.qTitle = this._route.snapshot.params['title'];
    const detailedConId = this._route.snapshot.params['detailedConId'];


    // Fetch full description using a service method (adjust it based on your service)
    this._detailedcontent.getSingleDetailedContent(detailedConId).subscribe(
      (data: any) => {
        this.detailedContent = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this._content.contents().subscribe(
      (data:any)=>{
        this.contents=data;
        console.log(this.contents);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Error In Loading Data !", 'error');
      }
    );
     
  }

}
