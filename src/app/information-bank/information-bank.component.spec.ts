import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBankComponent } from './information-bank.component';

describe('InformationBankComponent', () => {
  let component: InformationBankComponent;
  let fixture: ComponentFixture<InformationBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
