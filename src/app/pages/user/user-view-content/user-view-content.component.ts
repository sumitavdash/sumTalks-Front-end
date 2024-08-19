import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-user-view-content',
  templateUrl: './user-view-content.component.html',
  styleUrls: ['./user-view-content.component.css'],
})
export class UserViewContentComponent implements OnInit {
  [x: string]: any;
  cid: any;
  contents: {
    active: any;
    conId: number;
    title: string;
    category: {
      title: string;
      // cid: number;
    };
    description: string;
    conImage: string;
    link_url: string;
  }[] = [];

  constructor(
    private _content: ContentService,
    private _mat: MatSnackBar,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._content.getActiveContents().subscribe(
      (data: any) => {
        this.contents = data;
        // console.log(this.contents);
      },
      (error) => {
        console.log(error);
        this._mat.open('Your Turn Expired Ooops, login Honey !!', 'close', {
          duration: 3000,
        });
      }
    );
    //   this._route.params.subscribe((params)=>{

    //     this.cid=params['cid'];
    //     this.cid = 0;
    //     if(this.cid===0){
    //        console.log("Load All Contents");
    //       this._content.getActiveContents().subscribe((data:any)=>{
    //         this.contents=data;
    //         console.log(this.contents);
    //       },
    //       (error)=>{

    //         console.log(error);

    //         this._mat.open("Error in loading all contents", "Close",{
    //           duration:3000,
    //         });

    //       });
    //     }

    //     else{
    //       console.log("Load Specific Content");
    //        this._content.getActiveContentsOfCategory(this.cid).subscribe((data:any)=>{
    //         this.contents=data;
    //         console.log(this.contents);

    //        },
    //        (error)=>{

    //         alert("error in loading");
    //         console.log(error);
    //         // this._snack.open("Error in loading exam data", "Ok",{
    //         //   duration: 3000,
    //         // });
    //        });
    //     }
    //   });

    // }
  }
}
