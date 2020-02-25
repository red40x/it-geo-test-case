import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
	declarations: [],
	imports: [
		MatIconModule,
		MatButtonModule,
	],
	exports: [
		MatIconModule,
		MatButtonModule,
	],

	providers: []
	})

export class TopBarMaterialModule { }
