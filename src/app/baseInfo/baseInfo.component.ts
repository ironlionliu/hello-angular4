import { Component } from "@angular/core"
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { baseInfoService} from "./baseInfo.service"
import { RouterModule, Routes, Router} from '@angular/router'
import { HttpClient} from '@angular/common/http'


@Component({
    selector: "router-outlet",
    templateUrl: "./baseInfo.component.html",
    styleUrls: ["./baseInfo.component.scss"]
})
export class baseInfoComponent{
    public checkAll():void{
        var baseInfoDataLength = this.service.baseInfoData.length;
        this.service.currentState["checkedAll"] = 1 - this.service.currentState["checkedAll"];
        for(var i = 0; i < baseInfoDataLength; i++){
            this.service.baseInfoData[i]['checked'] = this.service.currentState["checkedAll"];
        }
        this.service.currentState['checkedTarget'] = [];
        for(var i = 0; i < this.service.baseInfoData.length; i++){
            if(this.service.baseInfoData[i]['checked'] == 1){
                this.service.currentState['checkedTarget'].push(i);
            }
        }
        console.log("被选中的有："+this.service.currentState['checkedTarget']);
        console.log("checkedall:"+this.service.currentState['checkedAll'])
    }

    public checkOne(baseInfoData,index):void{
        this.service.baseInfoData[index]["checked"] = 1 - this.service.baseInfoData[index]["checked"];
        //baseInfoData["checked"] = 1 - baseInfoData["checked"];

        console.log("ckecked is "+ baseInfoData["checked"]);
        this.service.currentState['checkedTarget'] = [];
        for(var i = 0; i < this.service.baseInfoData.length; i++){
            //这样就保证了塞进去的顺序是从小到大的
            if(this.service.baseInfoData[i]['checked'] == 1){
                this.service.currentState['checkedTarget'].push(i);
            }
        }
        console.log("被选中的有："+this.service.currentState['checkedTarget']);
    }

    public edit(baseInfoData,index):void{
        this.service.currentState["editTarget"] = index;
        console.log(this.service.currentState["editTarget"]);
        console.log(this.service.baseInfoData[this.service.currentState['editTarget']]['data'])

        this.router.navigate(["/baseInfoDetail"]);
    }
    public delete():void{
        //this.service.currentState["checkedTarget"].sort()//本身排好序了，这句不需要了
        console.log("将要删掉的条目有："+this.service.currentState["checkedTarget"])
        for(var i = this.service.currentState["checkedTarget"].length-1; i>=0; i--){
            var index = this.service.currentState["checkedTarget"][i];
            this.service.baseInfoData.splice(index,1);
        }
        this.service.currentState["checkedTarget"] = [];
    }
    public add():void{
        this.router.navigate(["/baseInfoAdd"]);
    }

    public testhttp():void{
        
        /*php*/
        // this.http.get('../back/test.php').subscribe(data => {
        //     // Read the result field from the JSON response.
        //     alert("hi");
        //     alert(data);
        //     console.log(data);
        //   });/**/


        this.http.post(
            '../back/test.php',
            "key1=test1&key2=test2&key3=test3"
        ).subscribe(data => {
            // Read the result field from the JSON response.
            alert("hi");
            alert(data);
            console.log(data);
          });/**/


        /*django
        this.http.get('../back/test.php').subscribe(data => {
        // Read the result field from the JSON response.
        alert("hi");
        alert(data);
        console.log(data);
        });/**/



        // /**java */
        // this.http.get('/hello/testget').subscribe(data => {
        //     // Read the result field from the JSON response.
        //     console.log(data);
        //     });/**/
        

        // this.http.post(
        //     '/hello/testpost',
        //     {
        //         key: "value"
        //     }
        // ).subscribe(data => {
        //     // Read the result field from the JSON response.
        //     console.log(data);
        //     });/**/



    }

    constructor(
        private service: baseInfoService,
        public router: Router,
        private http: HttpClient,
    ){    
    }
    ngOnInit(){
        
    }
}