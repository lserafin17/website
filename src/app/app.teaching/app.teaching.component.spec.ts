import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTeachingComponent } from './app.teaching.component';

describe('AppTeachingComponent', () => {
  let component: AppTeachingComponent;
  let fixture: ComponentFixture<AppTeachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTeachingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTeachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
