import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import SmokeMachine from '@bijection/smoke'
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title = 'ShaysDomain';
	@ViewChild('smokeCanvas') smokeCanvas: ElementRef;
	private canvas;
	constructor(
	) {}

	ngOnInit() {
	}

	ngAfterViewInit() {
		console.log(this.smokeCanvas.nativeElement);
		this.canvas = this.smokeCanvas.nativeElement;
		this.initCanvasSmoke();
	}

	initCanvasSmoke(): void {
		const ctx = this.canvas.getContext('2d');

		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		var party = SmokeMachine(ctx, [24, 24, 24])

		party.start() // start animating
		party.setPreDrawCallback((dt) => {
			party.addSmoke(innerWidth/2, innerHeight, .1)
			this.canvas.width = innerWidth
			this.canvas.height = innerHeight
		});
		onmousemove = (e) => {
			var x = e.clientX
			var y = e.clientY
			var n = .5
			var t = Math.floor(Math.random() * 200) + 3800
			party.addsmoke(x, y, n, t)
		}
	}
}
