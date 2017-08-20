import { Injectable } from '@angular/core';




@Injectable()
export class baseInfoService{

    public baseInfoData: object[]=[];//数据结构
    public baseInfoTitle = ["工厂名称","工厂地址","工厂类型","新增条目"];//要和baseInfoData的data维度保持一致
    public currentState: object = {
        checkedTarget: [],//当前选中项目
        editTarget: -1,//当前编辑项目
        checkedAll: 0,//是否为全选状态
        
    }
    
    private mockData(): void{
        for(var i = 0; i < 2; i++){
            var obj = {
                checked: 0,
                data: [],
            }
            obj.data = [
                "factoryname"+i,
                "testaddress"+i,
                "factoryscale"+i,
                "新增test"+i,
            ];
            this.baseInfoData.push(obj);
        }
    }
    private initUIData():void{
        var baseInfoDataLength = this.baseInfoData.length;
        this.currentState['checkedTarget'] = [];
        this.currentState['editTarget'] = 1;
    }
    constructor(){
        this.mockData();
        this.initUIData();
    }




}