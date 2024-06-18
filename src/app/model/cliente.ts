import { Veiculo } from "./veiculo";

export interface Cliente {
  id?: string;
  nome?: string;
  sobrenome?: String;
  username?: String;
  urlimagemperfilcliente?: String;
  veiculos: Veiculo[];

}
