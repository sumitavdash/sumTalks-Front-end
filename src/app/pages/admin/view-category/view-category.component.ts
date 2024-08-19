import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  categories: {
    title: string;
    description: string;
  }[] = [];

  constructor(private _category: CategoryService) {}

  ngOnInit(): void {
    this._category.Categories().subscribe(
      (data: any) => {
        this.categories = data;
        // console.log(this.categories);
      },

      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error in Loading Data', 'error');
      }
    );
  }
}
