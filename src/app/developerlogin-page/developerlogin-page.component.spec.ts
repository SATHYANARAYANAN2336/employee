import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperloginPageComponent } from './developerlogin-page.component';

describe('DeveloperloginPageComponent', () => {
  let component: DeveloperloginPageComponent;
  let fixture: ComponentFixture<DeveloperloginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperloginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperloginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
