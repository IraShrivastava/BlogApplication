import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
//router module used for setting up the application level route
import {RouterModule,Routes} from '@angular/router';
//import the components of application, these aur auto generated when component is created
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
//import the services used in application
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import {HttpClientModule} from '@angular/common/http';
//importing toastr module
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
//NgModule.bootstrap tells where to bootstrap the application or which will be the first component to be loaded when application is loaded
//decorator
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //routerModule forRoot method to declare the possible routes in application
    RouterModule.forRoot([
      {path: 'home' ,component:HomeComponent},
      {path: '', redirectTo:'home',pathMatch:'full'},
      {path: 'about',component:AboutComponent},
      {path: 'blog/:blogId',component:BlogViewComponent},
      {path:'create',component:BlogCreateComponent},
      {path: 'edit/:blogId', component:BlogEditComponent},
      {path: '**',component:NotFoundComponent}

    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
