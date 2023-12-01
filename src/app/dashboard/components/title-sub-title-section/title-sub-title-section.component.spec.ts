import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSubTitleSectionComponent } from './title-sub-title-section.component';

describe('TitleSubTitleSectionComponent', () => {
  let component: TitleSubTitleSectionComponent;
  let fixture: ComponentFixture<TitleSubTitleSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TitleSubTitleSectionComponent]
    });
    fixture = TestBed.createComponent(TitleSubTitleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
