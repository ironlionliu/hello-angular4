import { NgModule } from "@angular/core"
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes, Router} from '@angular/router'
import { CommonModule } from '@angular/common';

import { baseInfoComponent } from "./baseInfo.component"
import { baseInfoDetailComponent } from "./baseInfoDetail.component"
import { baseInfoAddComponent } from "./baseInfoAdd.component"
import { baseInfoService } from "./baseInfo.service"
import {HttpClientModule} from '@angular/common/http';


const baseInfoRoutes: Routes = [
    //{path: "", redirectTo: '/baseInfo', pathMatch: 'full'},
    {path: "baseInfo", component: baseInfoComponent},
    {path: "baseInfoDetail", component: baseInfoDetailComponent},
    {path: "baseInfoAdd", component: baseInfoAddComponent}
    // {
    //     path: "baseInfo", 
    //     component: baseInfoComponent,
    //     children: [
    //         {
    //             path: '',
    //             component: baseInfoComponent,
    //             children: [
    //                 {
    //                 path: 'baseInfoDetail',
    //                 component: baseInfoDetailComponent
    //                 },
    //             ]
    //         }
    //         //{path: '', component: baseInfoComponent},
    //         //{path: "baseInfoDetail", component: baseInfoDetailComponent}
    //     ]
    // },
    
]
@NgModule({
    declarations: [
        baseInfoComponent,
        baseInfoDetailComponent,
        baseInfoAddComponent,
    ],
    imports: [
        RouterModule.forChild(
            baseInfoRoutes
        ),
        CommonModule,
        FormsModule,
        HttpClientModule,
    ],
    exports: [
        RouterModule
      ],
    providers: [baseInfoService]
})
export class baseInfoModule{

}