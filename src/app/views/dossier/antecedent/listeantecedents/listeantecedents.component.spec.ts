import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeantecedentsComponent } from './listeantecedents.component';

describe('ListeantecedentsComponent', () => {
  let component: ListeantecedentsComponent;
  let fixture: ComponentFixture<ListeantecedentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeantecedentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeantecedentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
