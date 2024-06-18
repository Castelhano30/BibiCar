import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarGastoComponent } from './adicionar-gasto.component';

describe('AdicionarGastoComponent', () => {
  let component: AdicionarGastoComponent;
  let fixture: ComponentFixture<AdicionarGastoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarGastoComponent]
    });
    fixture = TestBed.createComponent(AdicionarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
