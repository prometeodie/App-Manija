import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrimengModule } from './primeng/primeng.module';
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GamesComponent } from './pages/games/games.component';
import { GameComponent } from './pages/game/game.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LayoutComponent } from './pages/layout/layout.component';
// STAND ALONE COMPONENTS
import { BoardgameCardComponent } from './components/boardgame-card/boardgame-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';


@NgModule({
  declarations: [
    AboutComponent,
    BlogComponent,
    BlogsComponent,
    ContactComponent,
    GameComponent,
    GamesComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    BoardgameCardComponent,
    BlogCardComponent
  ]
})
export class DashboardModule { }
