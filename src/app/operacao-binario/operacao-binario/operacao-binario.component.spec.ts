import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacaoBinarioComponent } from './operacao-binario.component';

describe('OperacaoBinarioComponent', () => {
  let component: OperacaoBinarioComponent;
  let fixture: ComponentFixture<OperacaoBinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacaoBinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacaoBinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
