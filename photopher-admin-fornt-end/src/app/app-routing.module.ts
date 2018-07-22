import { CommonModule } from '@angular/common';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent} from "./components/login/login.component";
import { PhotographerComponent} from './components/photographer/photographer.component';
import { PhotosComponent} from './components/photos/photos.component';
import {AlbumsComponent} from './components/albums/albums.component';
import {AlbumphotoComponent} from './components/albumphoto/albumphoto.component';
import { AuthGuard} from './gaurd/auth.guard';


const routes : Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'photographer', component: PhotographerComponent, canActivate:[AuthGuard]},
  {path:'photos/:id', component: PhotosComponent, canActivate:[AuthGuard]},
  {path:'album/:id', component: AlbumsComponent, canActivate:[AuthGuard]},
  {path:'albumphoto/:id', component: AlbumphotoComponent, canActivate:[AuthGuard]}
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
