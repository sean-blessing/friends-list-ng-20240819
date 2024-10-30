import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css'],
})
export class WorkExpComponent implements OnInit {
  title: string = 'Work Experience';
  //experience: string = "Foo Fighters, Lead Singer/Guitarist, 1994 - present";
  // make experience an array of strings
  // experience: string[] = [
  //   'Nirvana, Drummer, 1990 - 1994',
  //   'Foo Fighters, Lead Singer/Guitarist, 1994 - present',
  // ];
  experience: string[] | undefined;

  ngOnInit(): void {
    this.experience = [
      'Nirvana, Drummer, 1990 - 1994',
      'Foo Fighters, Lead Singer/Guitarist, 1994 - present',
    ];
  }

  printToConsole(): void {
    console.log('Work Exp Component - printToConsole() Method!');
    console.log(this.experience);
  }
}
