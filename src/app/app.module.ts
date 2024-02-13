import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule}        from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './services/auth.interceptor';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminWelcomeComponent } from './pages/admin/admin-welcome/admin-welcome.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewContentsComponent } from './pages/admin/view-contents/view-contents.component';
import { AddContentComponent } from './pages/admin/add-content/add-content.component';
import { UpdateContentComponent } from './pages/admin/update-content/update-content.component';
import { AddDetailedContentsComponent } from './pages/admin/add-detailed-contents/add-detailed-contents.component';
import { UpdateDetailedContentsComponent } from './pages/admin/update-detailed-contents/update-detailed-contents.component';
import { ViewContentsDetailedContentsComponent } from './pages/admin/view-contents-detailed-contents/view-contents-detailed-contents.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatMenuModule } from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FullDescriptionComponent } from './components/full-description/full-description.component';
import { BannerComponent } from './components/port-folio/banner/banner.component';
import { AboutComponent } from './components/port-folio/about/about.component';
 import { SkillsComponent } from './components/port-folio/skills/skills.component';
import { ProjectsComponent } from './components/port-folio/projects/projects.component';
import { ContactComponent } from './components/port-folio/contact/contact.component';
import { ResponsiveDirective } from './components/port-folio/directives/responsive.directive';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppearAnimationDirective } from './components/port-folio/directives/appear-animation.directive';
import { LetterArrayPipe } from './components/port-folio/letter-array.pipe';
 
import { NgParticlesModule } from 'ng-particles';
import { BeautyCardComponent } from './components/port-folio/beauty-card/beauty-card.component';
import { UserViewContentComponent } from './pages/user/user-view-content/user-view-content.component';
import { UserViewDetailedconComponent } from './pages/user/user-view-detailedcon/user-view-detailedcon.component';
// import { ParticleService } from './services/particle.service';
 
//import { MatTooltipModule } from '@angular/material/tooltip';


 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    AdminWelcomeComponent,
    UserDashboardComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    ViewContentsComponent,
    AddContentComponent,
    UpdateContentComponent,
    AddDetailedContentsComponent,
    UpdateDetailedContentsComponent,
    ViewContentsDetailedContentsComponent,
    HomeComponent,
    FullDescriptionComponent,
    BannerComponent,
    AboutComponent,
    
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ResponsiveDirective,
    HomePageComponent,
    AppearAnimationDirective,
    LetterArrayPipe,
    BeautyCardComponent,
    UserViewContentComponent,
    UserViewDetailedconComponent,
    
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    CKEditorModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatButtonModule,
    NgParticlesModule,
   // MatTooltipModule,
    
    
  ],
  providers: [
     
    authInterceptorProviders,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (particleService: ParticleService) => () => particleService.loadParticlesPreset(),
    //   multi: true,
    //   deps: [ParticleService],
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
    
}
