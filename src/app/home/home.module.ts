import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home.component";
import { HotPostsComponent } from './hot-posts/hot-posts.component';
import { TopPostsComponent } from './top-posts/top-posts.component';
import { NewPostsComponent } from './new-posts/new-posts.component';

const homeRouting: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: HotPostsComponent},
    {path: 'top', component: TopPostsComponent},
    {path: 'new', component: NewPostsComponent},
  ]},
  {path: 'hot', redirectTo: ''}
]

@NgModule({
  declarations: [
    HomeComponent,
    HotPostsComponent,
    TopPostsComponent,
    NewPostsComponent
  ], imports: [
    SharedModule,
    RouterModule.forChild(homeRouting)
  ]
})
export class HomeModule {}
