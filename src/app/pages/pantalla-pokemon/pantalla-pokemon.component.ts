import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IDataPokemon } from 'src/app/interfaces/pokemonInterface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pantalla-pokemon',
  templateUrl: './pantalla-pokemon.component.html',
  styleUrls: ['./pantalla-pokemon.component.css']
})
export class PantallaPokemonComponent implements OnInit{

  listPokemon: IDataPokemon[] = [];
  columnTabla: any;
  loading = false;

  constructor(
    private rutas: Router,
    private pokemonService: PokemonService,
    private mensajes: MessageService,
  ){}

  ngOnInit(): void {
    this.iniColumnaTabla();
    this.loading = true;
    this.pokemonService.getAllPokemons().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.listPokemon = datos.results;
          this.loading = false;
          this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Carga de Datos Exitosa' });
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Error al Cargar los Datos' });
        }
      }
    )
  }

  iniColumnaTabla(){
    this.columnTabla = [
        {
          field: 'icon', header: 'Icono'
        },
        {
          field: 'name', header: 'Nombre'
        },
        {
          field: 'url', header: 'Url'
        }
     ];
  }

  regresarInicio(){
    this.rutas.navigate(['pagina-pokemon']);
  }

}
