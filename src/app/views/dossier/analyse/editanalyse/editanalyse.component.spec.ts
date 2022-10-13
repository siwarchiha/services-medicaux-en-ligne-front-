import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditanalyseComponent } from './editanalyse.component';

describe('EditanalyseComponent', () => {
  let component: EditanalyseComponent;
  let fixture: ComponentFixture<EditanalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditanalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditanalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
