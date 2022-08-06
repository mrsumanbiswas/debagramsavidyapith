import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { DoubtsComponent } from './pages/doubts/doubts.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { UserComponent } from './pages/user/user.component';

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
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
