import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntoElementosComponent } from './conjunto-elementos.component';

describe('ConjuntoElementosComponent', () => {
  let component: ConjuntoElementosComponent;
  let fixture: ComponentFixture<ConjuntoElementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjuntoElementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjuntoElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
