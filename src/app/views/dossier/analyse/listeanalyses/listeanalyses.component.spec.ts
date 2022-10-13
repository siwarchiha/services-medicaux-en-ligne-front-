import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeanalysesComponent } from './listeanalyses.component';

describe('ListeanalysesComponent', () => {
  let component: ListeanalysesComponent;
  let fixture: ComponentFixture<ListeanalysesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeanalysesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeanalysesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
