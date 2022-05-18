import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LogoutComponent } from './components/logout/logout.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
    {path:'portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},
    {path:'iniciar-sesion', component:IniciarSesionComponent},
    {path:'logout', component: LogoutComponent},
    {path:'**',redirectTo:'iniciar-sesion',pathMatch :'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}