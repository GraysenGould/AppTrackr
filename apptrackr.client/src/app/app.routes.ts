import {Routes } from '@angular/router';
import {TrackingComponent} from './tracking/tracking.component';
import {CreateComponent,} from './tracking/create/create.component';
import {SummaryComponent} from './tracking/summary/summary.component';
import {ViewAllComponent} from './tracking/view-all/view-all.component';


export const routees: Routes = [
    {
        path: "tracking", 
        component: TrackingComponent,
        children: [
            {path: "view-all", component: ViewAllComponent},
            {path: "summary", component: SummaryComponent},
            {path: "create", component: CreateComponent}
            
        ]
    }
]