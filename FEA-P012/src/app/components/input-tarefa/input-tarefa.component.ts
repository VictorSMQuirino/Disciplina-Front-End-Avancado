import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-tarefa.component.html',
  styleUrl: './input-tarefa.component.css'
})
export class InputTarefaComponent {
  newTask = '';

  addTask() {
    
  }
}
