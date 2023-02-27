import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public color: ThemePalette = 'primary';
  title = 'mat-table-test';
  name = 'Angular 5';
  displayedColumns = ['date', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  onDateChanged(event : any, schedule: Element) {
  }
}

export interface Element {
  date: Date;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {date: new Date('"December 17, 1995 03:24:00"'), position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {date: new Date('"December 17, 1995 03:24:00"'),position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
