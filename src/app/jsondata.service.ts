import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class JsondataService {
	jsonurl;
	constructor(private httpClient: HttpClient) {
		this.jsonurl = 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json';
	}

	getJsonData(): Observable<any> {
		return this.httpClient.get(this.jsonurl);
	}
}
