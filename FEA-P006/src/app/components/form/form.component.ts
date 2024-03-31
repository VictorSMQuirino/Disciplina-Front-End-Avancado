import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../services/countries-service.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  camposDoForm = [];
  // camposDoForm = [
  //   {
  //     tipo: 'text',
  //     nome: 'name',
  //     rotulo: 'Nome'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'area',
  //     rotulo: 'Área'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'capital',
  //     rotulo: 'Capital'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'capitalInfo',
  //     rotulo: 'Latitude da Capital'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'car.side',
  //     rotulo: 'Lado'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'cca2',
  //     rotulo: 'Cca2'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'cca3',
  //     rotulo: 'Cca3'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'ccn3',
  //     rotulo: 'Ccn3'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'cioc',
  //     rotulo: 'Cioc'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'coatOfArms',
  //     rotulo: 'Brazão'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'continents',
  //     rotulo: 'Continentes'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'currencies',
  //     rotulo: 'Moedas'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'demonyms',
  //     rotulo: 'Povos'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'fifa',
  //     rotulo: 'Fifa'
  //   },
  //   {
  //     tipo: 'file',
  //     nome: 'flags',
  //     rotulo: 'Bandeiras'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'gini',
  //     rotulo: 'Grau de Gini'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'idd',
  //     rotulo: 'Deficiências intelectuais ou de desenvolvimento'
  //   },
  //   {
  //     tipo: 'checkbox',
  //     nome: 'independent',
  //     rotulo: 'Independente'
  //   },
  //   {
  //     tipo: 'checkbox',
  //     nome: 'landlocked',
  //     rotulo: 'Sem litorial'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'languages',
  //     rotulo: 'Idiomas'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'latlng',
  //     rotulo: 'Latitude e longitude'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'maps',
  //     rotulo: 'Link do mapa'
  //   },
  //   {
  //     tipo: 'number',
  //     nome: 'population',
  //     rotulo: 'População'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'postalCode',
  //     rotulo: 'Código postal'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'region',
  //     rotulo: 'Região'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'startOfWeek',
  //     rotulo: 'Início da semana'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'status',
  //     rotulo: 'Status'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'subregion',
  //     rotulo: 'Sub-região'
  //   },
  //   {
  //     tipo: 'text',
  //     nome: 'timezones',
  //     rotulo: 'Timezones'
  //   },
  //   {
  //     tipo: '',
  //     nome: '',
  //     rotulo: ''
  //   },
  // ];
  jsonResponse: any;

  constructor(private service: CountriesService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(response => {
      console.log(response);
      this.jsonResponse = response;
    });
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
