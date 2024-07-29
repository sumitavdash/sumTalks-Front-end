import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { DetailedContentsService } from 'src/app/services/detailed-contents.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-user-view-full-description',
  templateUrl: './user-view-full-description.component.html',
  styleUrls: ['./user-view-full-description.component.css']
})
export class UserViewFullDescriptionComponent {
  detailedContent: any;
    
  detailedConId: any;
  // conId: any;
  // qTitle: any;
  // fullDescription: string = '';


  // [x: string]: any;

  // contents: {
  //   active: any;
  //   conId: number;
  //   title: string;
  //   category: {
  //     title: string;
  //   };
  //   description: string;
  //    conImage: string;
  //    link_url: string;
     
  // }[] = [];


  constructor(private _route: ActivatedRoute, 
               private _detailedcontent: DetailedContentsService,private _content: ContentService,
               private _location: Location) {}
  ngOnInit(): void {

    console.log('UserViewFullDescriptionComponent initialized');

    // this.conId = this._route.snapshot.params['conId'];
    // this.qTitle = this._route.snapshot.params['title'];
    // const detailedConId = this._route.snapshot.params['detailedConId'];
    this._route.params.subscribe(params => {
      this.detailedConId = params['detailedConId'];

      console.log('detailedConId:', this.detailedConId);

    // Fetch full description using a service method (adjust it based on your service)
    this._detailedcontent.getSingleDetailedContent(this.detailedConId).subscribe(
      (data: any) => {
        this.detailedContent = data;
        console.log('detailedContent:', this.detailedContent);
      },
      (error: any) => {
        console.log(error);
      }
    );

    
     
  })

}
redirectToPreviousPage() {
  // Redirect to the previous page
  this._location.back();
}
}

// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { DetailedContentsService } from 'src/app/services/detailed-contents.service';

// @Component({
//   selector: 'app-user-view-full-description',
//   templateUrl: './user-view-full-description.component.html',
//   styleUrls: ['./user-view-full-description.component.css']
// })
// export class UserViewFullDescriptionComponent {
//   detailedContent: any;
//   detailedConId: any;

//   constructor(private _route: ActivatedRoute, private _detailedcontent: DetailedContentsService) {}

//   ngOnInit(): void {
//     console.log('UserViewFullDescriptionComponent initialized');

//     this._route.params.subscribe(params => {
//       this.detailedConId = params['detailedConId'];
//       console.log('detailedConId:', this.detailedConId);

//       // Fetch full description using a service method
//       this.loadDetailedContent();
//     });
//   }

//   loadDetailedContent() {
//     this._detailedcontent.getSingleDetailedContent(this.detailedConId).subscribe(
//       (data: any) => {
//         this.detailedContent = data;
//         console.log('detailedContent:', this.detailedContent);
//       },
//       (error: any) => {
//         console.log(error);
//       }
//     );
//   }
// }


 // this._content.contents().subscribe(
    //   (data:any)=>{
    //     this.contents=data;
    //     console.log(this.contents);
    //   },
    //   (error)=>{
    //     console.log(error);
    //     Swal.fire('Error !',"Error In Loading Data !", 'error');
    //   }
    // );