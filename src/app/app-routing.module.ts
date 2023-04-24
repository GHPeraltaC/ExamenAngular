import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PantallaPokemonComponent } from './pages/pantalla-pokemon/pantalla-pokemon.component';

const routes: Routes = [
    { path: '', redirectTo: 'pagina-pokemon', pathMatch: 'full'},
    { path: 'pagina-pokemon', component: PantallaPokemonComponent}
];

@NgModule (
    {
        declarations: [],
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {}
