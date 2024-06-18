import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarVeiculoComponent } from './adicionar-veiculo.component';

describe('AdicionarVeiculoComponent', () => {
  let component: AdicionarVeiculoComponent;
  let fixture: ComponentFixture<AdicionarVeiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarVeiculoComponent]
    });
    fixture = TestBed.createComponent(AdicionarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
