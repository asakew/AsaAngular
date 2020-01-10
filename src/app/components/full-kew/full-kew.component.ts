import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-kew',
  templateUrl: './full-kew.component.html',
  styleUrls: ['./full-kew.component.css']
})
export class FullKewComponent implements OnInit {

	ChartName: string;
	MicroSxema: any;
	OM: number;
	Kondesator: number;
	kondesatorlar: kondesatorlar;
	Colors: colors;
	options: string[];


  constructor() { }

  ngOnInit() {
  	this.ChartName = 'kew title chart...';
  	this.MicroSxema = 'TDA - 2003';
  	this.OM = 500;
  	this.Kondesator = 0.50;
  	this.kondesatorlar = {
  		uzgarmas: '330 om',
			uzgaruvchan: '100 om'
  	};
  	this.Colors = {
  		car: 'white',
  		salon: 'black',
  		wheels: 'silver'
  	};
  	this.options = ['ABS', 'AutoPilot'];
  }

}

interface colors {
	car: string,
	salon: string,
	wheels: string,
}

interface kondesatorlar {
	uzgaruvchan: string;
	uzgarmas: string;
}