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
  	this.ChartName = 'MicroSxema: TDA2003';
  	this.MicroSxema = 'TDA2003';
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

  ChartSelect (CName) {
  	if (CName == 'TDA30') {
  		this.ChartName = 'MicroSxema: TDA2030';
  		this.MicroSxema = 'TDA2030';
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
  	} else if (CName == 'TDA3') {
  			this.ChartName = 'MicroSxema: TDA2003';
  			this.MicroSxema = 'TDA2003';
  			this.OM = 495;
  			this.Kondesator = 0.50;
  			this.kondesatorlar = {
  				uzgarmas: '335 om',
					uzgaruvchan: '100 om'
  			};
  			this.Colors = {
  				car: 'white',
  				salon: 'black',
  				wheels: 'silver'
  			};
  			this.options = ['ABS', 'AutoPilot'];  		
  	} else {
  			this.ChartName = 'MicroSxema: TDA2060';
  			this.MicroSxema = 'TDA2060';
  			this.OM = 505;
  			this.Kondesator = 0.50;
  			this.kondesatorlar = {
  				uzgarmas: '325 om',
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