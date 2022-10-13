import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeconsultationsComponent } from './listeconsultations.component';

describe('ListeconsultationsComponent', () => {
  let component: ListeconsultationsComponent;
  let fixture: ComponentFixture<ListeconsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeconsultationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeconsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
