import { Component } from "@angular/core";
import { baseInfoService} from "./baseInfo.service";
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes, Router} from '@angular/router'


@Component({
    // selector: "router-outlet",
    templateUrl: "./baseInfoDetail.component.html",
    //styleUrls: ["./baseInfoDetail.component.scss"]
})
export class baseInfoDetailComponent{
    private tempInput = [];
    constructor(
        private service: baseInfoService,
        public router: Router,
    ){
    }
    public testclick(event):void{
        
    }

    public getInput(event, i){
        this.tempInput[i] = event.target.value;
        console.log(event.target.value);
    }

    public save(){
        console.log(this.tempInput)
        for(var i = 0; i < this.tempInput.length; i++){
            if(this.tempInput[i]){
                this.service.baseInfoData[this.service.currentState['editTarget']]['data'][i] = this.tempInput[i];
            }
        }
        this.router.navigate(["/baseInfo"]);
    }
    public cancel(){
        this.router.navigate(["/baseInfo"]);
    }

}