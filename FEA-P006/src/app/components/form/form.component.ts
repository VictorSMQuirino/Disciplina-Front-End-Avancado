import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../../services/countries-service.service";
import { FormField } from '../../models/formField.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  camposDoForm: FormField[] = [];
  jsonResponse: any;

  constructor(private service: CountriesService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(response => {
      console.log(response);
      const arrayResponse = Object.values(response);
      this.jsonResponse = arrayResponse[0];
      this.mapJson();
    });

  }

  mapJson() {
    for(let key in this.jsonResponse) {
      const field: FormField = {
        tipo: 'text',
        nome: key,
        rotulo: key
      }

      this.camposDoForm.push(field);
    }
  }
}
