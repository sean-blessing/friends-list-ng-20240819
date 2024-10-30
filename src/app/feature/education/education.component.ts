import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  title: string = 'Education';
  type: string = 'High School';
  name: string = 'Thomas Jefferson High School';
}
