import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphBarrasComponent } from './graph-barras.component';

describe('GraphBarrasComponent', () => {
  let component: GraphBarrasComponent;
  let fixture: ComponentFixture<GraphBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphBarrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
