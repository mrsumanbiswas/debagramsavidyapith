import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { DoubtsComponent } from './pages/doubts/doubts.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { UserComponent } from './pages/user/user.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'doubts', component: DoubtsComponent
  },
  {
    path: 'tools', component: ToolsComponent
  },
  {
    path: 'blogs', component: BlogsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'photos', component: PhotosComponent
  },
  {
    path: 'page-not-found', component: PageNotFoundComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'page-not-found', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
