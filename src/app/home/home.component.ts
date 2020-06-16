import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../jsondata.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	myData;
	pageOfItems;
	constructor(private jsonService: JsondataService) {
		this.jsonService.getJsonData().subscribe((data) => {
			this.myData = data;
			console.log(this.myData);
		});
	}

	onChangePage(pageOfItems: Array<any>) {
		this.pageOfItems = pageOfItems;
	}

	ngOnInit(): void {}
}
