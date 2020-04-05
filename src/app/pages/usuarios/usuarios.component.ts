import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  estados: string[] = ['Negativo', 'Sospechoso', 'Positivo'];

  constructor() { }

  ngOnInit(): void {
  }

}
