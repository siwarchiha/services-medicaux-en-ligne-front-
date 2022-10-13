import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditantecedentComponent } from './editantecedent.component';

describe('EditantecedentComponent', () => {
  let component: EditantecedentComponent;
  let fixture: ComponentFixture<EditantecedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditantecedentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditantecedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
