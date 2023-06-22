import {Routes, Router, RouterModule, NavigationEnd, RouteReuseStrategy } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { CreateLotComponent } from './components/create-lot/create-lot.component';
import { AddBalesComponent } from './components/add-bales/add-bales.component';
import { SearchBaleComponent } from './components/search-bale/search-bale.component';
import { ViewBaleDetailsComponent } from './components/view-bale-details/view-bale-details.component';
import { ViewBaleTrackingComponent } from './components/view-bale-tracking/view-bale-tracking.component';
import { UpdateBaleTrackingComponent } from './components/update-bale-tracking/update-bale-tracking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListLotComponent } from './components/list-lot/list-lot.component';
import { ViewLotDetailsComponent } from './components/view-lot-details/view-lot-details.component';
import { ListBalesComponent } from './components/list-bales/list-bales.component';
import { EligibleMenPerHhComponent } from './components/eligible-men-per-hh/eligible-men-per-hh/eligible-men-per-hh.component';
import { EligibleMenPerHhTeamwiseComponent } from './components/eligible-men-per-hh/eligible-men-per-hh-teamwise/eligible-men-per-hh-teamwise.component';
import { EligibleMenPerHhMemberwiseComponent } from './components/eligible-men-per-hh/eligible-men-per-hh-memberwise/eligible-men-per-hh-memberwise.component';
import { EligibleWomenPerHhComponent } from './components/eligible-women-per-hh/eligible-women-per-hh/eligible-women-per-hh.component';
import { EligibleWomenPerHhMemberwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-memberwise/eligible-women-per-hh-memberwise.component';
import { EligibleWomenPerHhTeamwiseComponent } from './components/eligible-women-per-hh/eligible-women-per-hh-teamwise/eligible-women-per-hh-teamwise.component';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy.service';
import { HhcompletionRateComponent } from './components/hhcompletion-rate/hhcompletion-rate/hhcompletion-rate.component';
import { HhcompletionRateTeamwiseComponent } from './components/hhcompletion-rate/hhcompletion-rate-teamwise/hhcompletion-rate-teamwise.component';
import { HhcompletionRateMemberwiseComponent } from './components/hhcompletion-rate/hhcompletion-rate-memberwise/hhcompletion-rate-memberwise.component';





@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        // {path : '', component : DashboardComponent},
                        // {path : 'lot/create', component : CreateLotComponent },
                        // {path : 'lot/addBales', component : AddBalesComponent },
                        // {path : 'lot/list', component : ListLotComponent},
                        // {path : 'bale/list', component : ListBalesComponent},
                        // {path : 'lot/details/view', component : ViewLotDetailsComponent},
                        // {path : 'bale/search/byUbin', component : SearchBaleComponent},
                        // {path : 'bale/details/view', component : ViewBaleDetailsComponent},
                        // {path : 'bale/tracking/view', component : ViewBaleTrackingComponent},
                        // {path : 'bale/tracking/update', component : UpdateBaleTrackingComponent},
                        {path : 'getAllEligibleMenPerHhReport', component: EligibleMenPerHhComponent},
                        {path : 'getAllEligibleMenPerHhReportTeamwise/:stateId/:stateName', component: EligibleMenPerHhTeamwiseComponent},
                        {path : 'getAllEligibleMenPerHhMemberwise/:stateId/:stateName/:teamNo/:teamName', component:EligibleMenPerHhMemberwiseComponent},
                        {path : 'getAllEligibleWomenPerHhReport', component: EligibleWomenPerHhComponent},
                        {path : 'getAllEligibleWomenPerHhMemberwise/:stateId/:stateName/:teamNo/:teamName', component:EligibleWomenPerHhMemberwiseComponent},
                        {path : 'getAllEligibleWomenPerHhReportTeamwise/:stateId/:stateName', component:EligibleWomenPerHhTeamwiseComponent},
                        {
                            path: 'getAllHhCompletionRate',
                            component: HhcompletionRateComponent,
                        },
                        {
                            path: 'getAllHhCompletionRateTeamWise/:stateId/:stateName',
                            component: HhcompletionRateTeamwiseComponent,
                        },
                        {
                            path: 'getAllHhCompletionRateMemberWise/:stateId/:stateName/:teamNo/:teamName',
                            component: HhcompletionRateMemberwiseComponent,
                        },
                    ],
                },
                
                // {path : 'getAllEligibleMenPerHhReport', component: EligibleMenPerHhComponent},
                //         {path : 'getAllEligibleMenPerHhReportTeamwise/:stateId/:stateName', component: EligibleMenPerHhTeamwiseComponent},
                //         {path : 'getAllEligibleMenPerHhMemberwise/:stateId/:stateName/:teamNo/:teamName', component:EligibleMenPerHhMemberwiseComponent},
                //         {path : 'getAllEligibleWomenPerHhReport', component: EligibleWomenPerHhComponent},
                //         {path : 'getAllEligibleWomenPerHhMemberwise/:stateId/:stateName/:teamNo/:teamName', component:EligibleWomenPerHhMemberwiseComponent},
                //         {path : 'getAllEligibleWomenPerHhReportTeamwise/:stateId/:stateName', component:EligibleWomenPerHhTeamwiseComponent},

                //  { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
    
})








export class AppRoutingModule {
    constructor(private router:Router)
    {
        this.router.routeReuseStrategy.shouldReuseRoute=function(){
            return false;
        }
    

    }
}
