import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Aplicacion-Crud-Angular';

  employees= [
    {'name': 'Fazt', position: 'Manager'},
    {'name': 'Juan', position: 'Programmer'},
    {'name': 'Pedro', position: 'Designer'}
  ]
  
  model:any = {};

  addEmployee():void{

  }

  deleteEmployee():void{

  }

  editEmployee():void{

  }

  updateEmployee():void{

  }
}
