import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
