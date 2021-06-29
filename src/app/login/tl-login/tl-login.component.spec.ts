import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlLoginComponent } from './tl-login.component';

describe('TlLoginComponent', () => {
  let component: TlLoginComponent;
  let fixture: ComponentFixture<TlLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
