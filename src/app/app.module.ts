import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CreateLotComponent } from './components/create-lot/create-lot.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SearchBaleComponent } from './components/search-bale/search-bale.component';
import { ViewBaleDetailsComponent } from './components/view-bale-details/view-bale-details.component';
import { ViewBaleTrackingComponent } from './components/view-bale-tracking/view-bale-tracking.component';
import { UpdateBaleTrackingComponent } from './components/update-bale-tracking/update-bale-tracking.component';
import { TimelineModule } from 'primeng/timeline';
import { AddBalesComponent } from './components/add-bales/add-bales.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListLotComponent } from './components/list-lot/list-lot.component';
import { TableModule } from 'primeng/table';
import { ViewLotDetailsComponent } from './components/view-lot-details/view-lot-details.component';
import { ListBalesComponent } from './components/list-bales/list-bales.component';
import { EligibleMenPerHhComponent } from './components/eligible-men-per-hh/eligible-men-per-hh/eligible-men-per-hh.component';
import { EligibleMenPerHhTeamwiseComponent } from './components/eligible-men-per-hh/eligible-men-per-hh-teamwise/eligible-men-per-hh-teamwise.component';
import { EligibleMenPerHhMemberwiseComponent } from './components/eligible-men-per-hh/eligible-men-per-hh-memberwise/eligible-men-per-hh-memberwise.component';
import { EligibleWomenPerHhComponent } from './components/eligible-women-per-hh/eligible-women-per-hh/eligible-women-per-hh.component';
import { EligibleWomenPerHhTeamwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-teamwise/eligible-women-per-hh-teamwise.component';
import { EligibleWomenPerHhMemberwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-memberwise/eligible-women-per-hh-memberwise.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HhcompletionRateComponent } from './components/hhcompletion-rate/hhcompletion-rate/hhcompletion-rate.component';
import { HhcompletionRateMemberwiseComponent } from './components/hhcompletion-rate/hhcompletion-rate-memberwise/hhcompletion-rate-memberwise.component';
import { HhcompletionRateTeamwiseComponent } from './components/hhcompletion-rate/hhcompletion-rate-teamwise/hhcompletion-rate-teamwise.component';


@NgModule({
    declarations: [AppComponent, CreateLotComponent, SearchBaleComponent, ViewBaleDetailsComponent, ViewBaleTrackingComponent, UpdateBaleTrackingComponent, AddBalesComponent, DashboardComponent, ListLotComponent, ViewLotDetailsComponent, ListBalesComponent, EligibleMenPerHhComponent, EligibleMenPerHhTeamwiseComponent, EligibleMenPerHhMemberwiseComponent, EligibleWomenPerHhComponent, EligibleWomenPerHhTeamwiseComponent, EligibleWomenPerHhMemberwiseComponent,HhcompletionRateComponent,HhcompletionRateMemberwiseComponent,HhcompletionRateTeamwiseComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        CalendarModule,
        BrowserModule,
        DialogModule,
        InputTextModule,
        TimelineModule,
        TableModule
        
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }],
    // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    //hash location strategy uses the hash fragment part of the URL to store state for the client
    //has the downside that it won't work with Angular Universal once that's released.

    bootstrap: [AppComponent],
})
export class AppModule {}
