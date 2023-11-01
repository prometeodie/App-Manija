import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GamesComponent } from './pages/games/games.component';
import { GameComponent } from './pages/game/game.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { PrimengModule } from './primeng/primeng.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GamesComponent,
    GameComponent,
    BlogsComponent,
    BlogComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class DashboardModule { }
