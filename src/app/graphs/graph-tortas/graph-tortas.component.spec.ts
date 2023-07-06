import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTortasComponent } from './graph-tortas.component';

describe('GraphTortasComponent', () => {
  let component: GraphTortasComponent;
  let fixture: ComponentFixture<GraphTortasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphTortasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphTortasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
