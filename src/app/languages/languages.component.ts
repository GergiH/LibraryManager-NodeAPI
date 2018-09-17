import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Language } from '../frontend-models/Language';
// import { ShowSnackbar } from '../shared/design';

@Component({
	selector: 'app-languages',
	templateUrl: './languages.component.html',
	styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
	title = 'Languages';
	subTitle = 'List';
	languageList = new Array<Language>();
	languageToEdit = new Language();
	successClass = '';

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.getLanguages();
	}

	getLanguages() {
		this.http
			.get<Language[]>('/api/languages')
			.subscribe(res => {
				this.languageList = res;
			});
	}

	editLanguage(id: string) {
		if (id) {
			this.http
				.get<Language>('/api/languages/' + id)
				.subscribe(res => {
					this.languageToEdit = res;
				});
		}
	}

	onSave(_id: string) {
		if (_id) {
			this.http
				.patch('/api/languages/' + _id, {
					_id: _id,
					id: this.languageToEdit.id,
					name: this.languageToEdit.name
				}, {})
				.subscribe();

			this.successClass = 'show';
			setTimeout(() => {
				this.successClass = '';
			}, 3000);
			this.getLanguages();
		}
	}
}
