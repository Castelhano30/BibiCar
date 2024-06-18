import { Gasto } from "./gasto";

export interface Veiculo {
  id?: String;
  tipo?: String;
  modelo?: String;
  ano?: String;
  placa?: String;
  gastos?: Gasto[];
}
