import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { DetailedContentsService } from 'src/app/services/detailed-contents.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-full-descript-detail-cont',
  templateUrl: './view-full-descript-detail-cont.component.html',
  styleUrls: ['./view-full-descript-detail-cont.component.css'],
})
export class ViewFullDescriptDetailContComponent implements OnInit {
  detailedContent: any;

  detailedConId: any;

  constructor(
    private _route: ActivatedRoute,
    private _detailedcontent: DetailedContentsService,
    private _content: ContentService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    console.log('UserViewFullDescriptionComponent initialized');

    // this.conId = this._route.snapshot.params['conId'];
    // this.qTitle = this._route.snapshot.params['title'];
    // const detailedConId = this._route.snapshot.params['detailedConId'];
    this._route.params.subscribe((params) => {
      this.detailedConId = params['detailedConId'];

      // console.log('detailedConId:', this.detailedConId);

      // Fetch full description using a service method (adjust it based on your service)
      this._detailedcontent
        .getSingleDetailedContent(this.detailedConId)
        .subscribe(
          (data: any) => {
            this.detailedContent = data;
            // console.log('detailedContent:', this.detailedContent);
          },
          (error: any) => {
            console.log(error);
          }
        );
    });
  }
  redirectToPreviousPage() {
    // Redirect to the previous page
    this._location.back();
  }
}
