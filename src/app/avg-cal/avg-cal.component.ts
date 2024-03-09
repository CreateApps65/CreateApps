import { Component } from '@angular/core';

@Component({
  selector: 'app-avg-cal',
  templateUrl: './avg-cal.component.html',
  styleUrls: ['./avg-cal.component.css']
})
export class AvgCalComponent {

   AutoAvgDiv:boolean = false;
   showCal:boolean =false;
   AutoAvgButton : boolean =true;

   Unit1 : string = "";
   SharePrize1 : string= "";

   Unit2 : string = "";
   SharePrize2 : string= "";   

   Unit3 : string = "";
   SharePrize3 : string= "";  

   Amount1Invested : string="";
   Amount2Invested : string ="";
   Amount3Invested : string ="";

   TotalUnit : string ="";
   AveragePrize : string ="";
   TotalAmount :string ="";
   
   getData(Unit1:string,SharePrize1:string,Unit2:string,SharePrize2:string){
    this.AutoAvgDiv = false;
    var U1 = Number(Unit1);
    var S1 = Number(SharePrize1);
    var U2 = Number(Unit2);
    var S2 = Number(SharePrize2);
    if(U1 > 0 && S1 > 0 && U2 > 0 && S2 >0)
    {
      this.Amount1Invested = (U1 * S1).toString();
      this.Amount2Invested = (U2 * S2).toString();
      this.TotalUnit = (U1 + U2).toString();
      this.AveragePrize = (((U1 * S1) + (U2 * S2)) / (U1 + U2)).toFixed(2).toString();
      this.TotalAmount = ((U1 * S1) + (U2 * S2)).toFixed(2).toString();       
      this.showCal = true;
      this.AutoAvgButton = (S1 > S2) ? false : true;
         
     // this.AutoAvgButton = false;
    }
    else{
        this.showCal =false;
        this.AutoAvgButton = true;
    } 
  }

  clearField()  {
    this.Unit1 = "";this.SharePrize1 = "";this.Unit2 ="",this.SharePrize2 ="";
    this.AutoAvgDiv =false;this.AutoAvgButton =true;
    this.TotalUnit = "";  this.showCal = false; this.AveragePrize = "",this.TotalAmount = "";
  }

  AutoAverageService(Unit1:string,SharePrize1:string,Unit2:string,SharePrize2:string){
    this.AutoAvgDiv = false;
    var U1 = Number(Unit1);
    var S1 = Number(SharePrize1);
    var U2 = Number(Unit2);
    var S2 = Number(SharePrize2);
    
    if(U1 > 0 && S1 > 0 && U2 > 0 && S2 >0)
    {      
      let Value : number = 1;
      let AveragePrize =  (((U1 * S1) + (Value * S2)) / (U1 + Value));
     
      let ExpectedPrice = S2;
      
     

      if(AveragePrize > ExpectedPrice)
      {
        while(AveragePrize > ExpectedPrice)
        {
          AveragePrize = Math.round(  (((U1 * S1) + (Value * S2)) / (U1 + Value)));
          console.log(AveragePrize);
          Value++;
        }
        this.Unit3 = Value.toString();
        this.SharePrize3 = AveragePrize.toString();
        this.Amount3Invested = (Value * AveragePrize).toString();
        this.AutoAvgDiv = true;
      }
    }
  }

}
