import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { CrearPacienteComponent } from "./crear-paciente/crear-paciente.component";
import { PagesComponent } from "./pages.component";
import { DatosDoctorComponent } from "./datos-doctor/datos-doctor.component";
import { ExpedienteComponent } from "./expediente/expediente.component";
import { HistorialPacienteComponent } from "./historial-paciente/historial-paciente.component";
import { NuevoHistorialComponent } from "./nuevo-historial/nuevo-historial.component";
import { DatosPacienteComponent } from "./datos-paciente/datos-paciente.component";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path:'crear-paciente',
        component: CrearPacienteComponent
      },
      {
        path:'datos-doctor',
        component: DatosDoctorComponent
      },
      {
        path: 'datos-paciente',
        component: DatosPacienteComponent
      },
      {
        path: 'expediente/:id',
        component: ExpedienteComponent
      },
      {
        path: 'historial-paciente',
        component: HistorialPacienteComponent
      },
      {
        path: 'nuevo-historial',
        component: NuevoHistorialComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {}
