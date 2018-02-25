import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
	loadedFeature: string = "recipe";
	onNavigate(arg: string) {
		this.loadedFeature = arg;
	}
}
