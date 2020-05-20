import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full' },
  {path:'about',component:AboutComponent},
  {path:'blog/:blogId',component:BlogViewComponent},
  {path:'create',component:BlogCreateComponent},
  {path:'edit/:blogId',component:BlogEditComponent},
  {path:'notfound',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
