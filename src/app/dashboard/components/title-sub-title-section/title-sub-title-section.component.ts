import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Titles } from '../../interfaces';

@Component({
  selector: 'title-subtitle-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-sub-title-section.component.html',
  styleUrls: ['./title-sub-title-section.component.scss']
})
export class TitleSubTitleSectionComponent {
  @Input() titleSubtitle!:Titles;
}
