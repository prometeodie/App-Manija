import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsNavbarComponent } from './tags-navbar.component';

describe('TagsNavbarComponent', () => {
  let component: TagsNavbarComponent;
  let fixture: ComponentFixture<TagsNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TagsNavbarComponent]
    });
    fixture = TestBed.createComponent(TagsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
