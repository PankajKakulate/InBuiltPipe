import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  public Name:string="marvellous infosystems pune";
  public Value : number =78.647;
  public Today =new Date();

  public Book={
    "Name" : "Learning Angular",
    "Author" : "James Peter",
    "Price" : 8000,
    "BookEdition":[
                    { "Name":"Pankaj Kakulate",
                      "Author":"Ram Shiv Bhola"
                    }
                  ]
    
  }
}
