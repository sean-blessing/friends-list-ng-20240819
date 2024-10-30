import { Component } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent {
  title: string = 'Personal Info';
  person: Person = new Person(
    'Dave Grohl',
    '111 Test Way',
    '444-555-7777',
    'dave@ff.com'
  );
}
