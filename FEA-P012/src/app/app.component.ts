import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTarefaComponent } from './components/input-tarefa/input-tarefa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTarefaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FEA-P012';
}
