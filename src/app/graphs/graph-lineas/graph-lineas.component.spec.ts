import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLineasComponent } from './graph-lineas.component';

describe('GraphLineasComponent', () => {
  let component: GraphLineasComponent;
  let fixture: ComponentFixture<GraphLineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphLineasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
