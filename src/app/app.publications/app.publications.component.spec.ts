import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPublicationsComponent } from './app.publications.component';

describe('AppPublicationsComponent', () => {
  let component: AppPublicationsComponent;
  let fixture: ComponentFixture<AppPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPublicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
