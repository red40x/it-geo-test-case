import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: DynamicFormComponent
			},
		]),
	],
	exports: [
		RouterModule,
	],
})

export class DynamicFormRoutingModule { }
