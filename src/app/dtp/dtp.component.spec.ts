import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtpComponent } from './dtp.component';

describe('DtpComponent', () => {
  let component: DtpComponent;
  let fixture: ComponentFixture<DtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
