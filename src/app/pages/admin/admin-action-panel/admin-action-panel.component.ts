import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-action-panel',
  templateUrl: './admin-action-panel.component.html',
  styleUrls: ['./admin-action-panel.component.css'],
})
export class AdminActionPanelComponent implements OnInit, AfterViewInit {
  userDetails: any[] = [];
  dataSource = new MatTableDataSource<any>(this.userDetails);
  displayedColumns = [
    'userId',
    'fullName',
    'email',
    'enabled',
    'actions',
    'delete',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.refreshUserList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  toggleUserStatus(user: any): void {
    const newStatus = !user.enabled;

    this.userService.saveUser(user.userId, { enabled: newStatus }).subscribe(
      () => {
        const index = this.userDetails.findIndex(
          (u) => u.userId === user.userId
        );
        if (index !== -1) {
          this.userDetails[index].enabled = newStatus;
          this.snackBar.open(
            `User ${user.fullName} ${
              newStatus ? 'enabled' : 'disabled'
            } successfully.`,
            'Close',
            { duration: 3000 }
          );
          this.dataSource.data = [...this.userDetails];
        } else {
          console.error('User not found in userDetails array after update.');
        }
      },
      (error) => {
        console.error('Error updating user status:', error);
        this.snackBar.open(
          'Error updating user status. Please try again.',
          'Close',
          { duration: 3000 }
        );
      }
    );
  }

  deleteUser(user: any): void {
    this.userService.deleteUser(user.userId).subscribe(
      () => {
        this.userDetails = this.userDetails.filter(
          (u) => u.userId !== user.userId
        );
        this.snackBar.open(
          `User ${user.fullName} deleted successfully.`,
          'Close',
          { duration: 3000 }
        );
        this.dataSource.data = [...this.userDetails];
      },
      (error) => {
        console.error('Error deleting user:', error);
        this.snackBar.open('Error deleting user. Please try again.', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  refreshUserList(): void {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.userDetails = data;
        this.dataSource.data = this.userDetails;
        this.dataSource.paginator = this.paginator;
      },
      (error: any) => {
        console.error('Error fetching user list:', error);
        this.snackBar.open(
          'Error fetching user list. Please try again.',
          'Close',
          { duration: 3000 }
        );
      }
    );
  }

  redirectToPreviousPage() {
    this.location.back();
  }
}
