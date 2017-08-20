import { Component } from "@angular/core";
import { baseInfoService} from "./baseInfo.service";
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes, Router} from '@angular/router'

@Component({
    // selector: "router-outlet",
    templateUrl: "./baseInfoAdd.component.html",
    //styleUrls: ["./baseInfoAdd.component.scss"]
})
export class baseInfoAddComponent{
    private tempInput = [];
    constructor(
        private service: baseInfoService,
        private router: Router,
    ){
    }
    public getInput(event, i){
        this.tempInput[i] = event.target.value;
        console.log(event.target.value);
    }

    public save(){
        console.log(this.tempInput)
        var addItem = {
            checked: 0,
            data: []
        }
        addItem.data = this.tempInput;
        this.service.baseInfoData.push(addItem);
        //this.router.navigate(["/baseInfo"]);
    }
    public cancel(){
        this.router.navigate(["/baseInfo"]);
    }
}