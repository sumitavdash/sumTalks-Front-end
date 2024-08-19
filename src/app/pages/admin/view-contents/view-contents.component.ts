import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-contents',
  templateUrl: './view-contents.component.html',
  styleUrls: ['./view-contents.component.css'],
})
export class ViewContentsComponent implements OnInit {
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

  constructor(private _content: ContentService) {}

  ngOnInit(): void {
    this._content.contents().subscribe(
      (data: any) => {
        this.contents = data;
        // console.log(this.contents);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !', 'Error In Loading Data !', 'error');
      }
    );
  }
  //deleting quizzes  its a unique and wow technique in angular documentation
  deleteContent(conId: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are You Sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //deleting quiz
        this._content.deleteContent(conId).subscribe(
          (_data) => {
            //eka sangare delte hele ui ru bhi instantly hateibaku filter option use karibi
            this.contents = this.contents.filter(
              (content) => content.conId != conId
            );

            Swal.fire('Success', 'Content Deleted', 'success');
          },
          (_error) => {
            Swal.fire('Error', 'Error In Deleting Content', 'error');
          }
        );
      }
    });
  }
}
