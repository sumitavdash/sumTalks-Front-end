import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminWelcomeComponent } from './pages/admin/admin-welcome/admin-welcome.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewContentsComponent } from './pages/admin/view-contents/view-contents.component';
import { AddContentComponent } from './pages/admin/add-content/add-content.component';
import { UpdateContentComponent } from './pages/admin/update-content/update-content.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { ViewContentsDetailedContentsComponent } from './pages/admin/view-contents-detailed-contents/view-contents-detailed-contents.component';
import { AddDetailedContentsComponent } from './pages/admin/add-detailed-contents/add-detailed-contents.component';
import { UpdateDetailedContentsComponent } from './pages/admin/update-detailed-contents/update-detailed-contents.component';
import { FullDescriptionComponent } from './components/full-description/full-description.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserViewContentComponent } from './pages/user/user-view-content/user-view-content.component';

const routes: Routes = [
   
  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full',
  },

  {
    path:'',
    component:HomePageComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full',  
  },
  {
    path: 'admin',
    component:  AdminDashboardComponent,
    canActivate: [AdminGuard],
    children:[
      {

        path:'',
        component: AdminWelcomeComponent,
      },
       
      {
        path: 'categories',
        component: ViewCategoryComponent,
      },

      {
        path: 'add-category',
        component: AddCategoryComponent,
      },

      {
        path: 'contents',
        component: ViewContentsComponent,
      },

      {
        path: 'add-content',
        component: AddContentComponent,
      },

      {
        path:'content/:conId',
        component: UpdateContentComponent,
      },

      {
        path:'view-detailedcontents/:conId/:title',
        component:ViewContentsDetailedContentsComponent,
      },

      {
        path: 'admin/view-full-description/:conId/:title/:detailedConId',
        component: FullDescriptionComponent,
      },

      {
        path:"add-detailedcontent/:conId/:title",
        component:AddDetailedContentsComponent,
      },

      {
        path:'detailedcontent/:detailedconId',
        component:UpdateDetailedContentsComponent,
      },

      
    ],
  },
    
   
      
  
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children: [
       
      {
        path: 'contents',
        component:  UserViewContentComponent,
      },
      {
        path:'view-detailedcontents/:conId/:title',
        component:ViewContentsDetailedContentsComponent,
      },
 
      //
    ],
  },
  
     
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
