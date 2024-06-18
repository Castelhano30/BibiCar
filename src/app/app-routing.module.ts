import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesVeiculoComponent } from './detalhes-veiculo/detalhes-veiculo.component';
import { AdicionarGastoComponent } from './adicionar-gasto/adicionar-gasto.component';
import { AdicionarVeiculoComponent } from './adicionar-veiculo/adicionar-veiculo.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "cadastro", component: CadastroComponent},
  { path: "detalhes-veiculo", component: DetalhesVeiculoComponent},
  { path: "adicionar-gasto", component: AdicionarGastoComponent},
  { path: "adicionar-veiculo", component: AdicionarVeiculoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
