import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLloginPageComponent } from './tllogin-page.component';

describe('TLloginPageComponent', () => {
  let component: TLloginPageComponent;
  let fixture: ComponentFixture<TLloginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TLloginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TLloginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
