import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'blog-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  blogRoute: string='/lmdr/blog/pepito';
}
