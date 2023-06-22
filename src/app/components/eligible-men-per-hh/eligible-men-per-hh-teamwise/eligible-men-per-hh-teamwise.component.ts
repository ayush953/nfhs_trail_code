import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseholdService } from 'src/app/services/household.service';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-eligible-men-per-hh-teamwise',
  templateUrl: './eligible-men-per-hh-teamwise.component.html',
  styleUrls: ['./eligible-men-per-hh-teamwise.component.scss']
})
export class EligibleMenPerHhTeamwiseComponent implements OnInit {
  constructor(private householdService: HouseholdService,
    private route:ActivatedRoute,
    ) {}

datalist: any[]=[];
title = 'datatables';
dtOptions: any = {};
// for csv download
cols: any[]=[];                
selectedDatalist: any[]=[];    
exportColumns :any[]=[]; 

stateId!: string | null ;
stateName!: string | null ;
ngOnInit() {
  console.log("called state init");
// this.formModal = new window.bootstrap.Modal(
//   document.getElementById('myModal')
// );
this.cols = [                
  { field: 'team', header: 'Teams', customExportHeader: 'Datalist Code' },
  { field: 'noOfCompletedHhUrban', header: 'Number of Completed Households (Urban)' },
  { field: 'noOfDeFactoEligibleMenInCompletedHhUrban', header: 'Number of de facto eligible men in those HHs (Urban)' },
  { field: 'meanNoOfDeFactoEligibleMenPerHhUrban', header: 'Mean number of de facto eligible men per HH (Urban)' },
  { field: 'noOfCompletedHhRural', header: 'Number of Completed Households (Rural)' },
  { field: 'noOfDeFactoEligibleMenInCompletedHhRural', header: 'Number of de facto eligible men in those HHs (Rural)' },
  { field: 'meanNoOfDeFactoEligibleMenPerHhRural', header: 'Mean number of de facto eligible men per HH (Rural)' }

];
this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

this.stateId=this.route.snapshot.paramMap.get('stateId');
this.stateName=this.route.snapshot.paramMap.get('stateName');
console.log(this.stateId);
console.log(this.stateName);
// this.householdService.getAllEligibleMenPerHhTeamwise(this.stateId).subscribe(
// (datalist) => {
// console.log(datalist);
// this.datalist = datalist;
// // setTimeout(() => {
// // $('#myTable').DataTable({
// //   pagingType: 'full_numbers',
// //   pageLength: 10,
// //   processing: true,
// //   "scrollY": "300px",
// //   lengthMenu : [5, 10, 25],
// //   dom: 'Blfrtip'
// // });
// // }, 1);
// },
// // (error) => console.error(error)
// );



this.getdata();
}


async getdata(){
  this.datalist = await lastValueFrom(this.householdService.getAllEligibleMenPerHhTeamwise(this.stateId));
}

exportPdf() {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
          const doc = new jsPDF.default('l', 'px', 'a3');
          (doc as any).autoTable(this.exportColumns, this.datalist);
          doc.save('men-per-hh-teamwise.pdf');
      });
  });
}

exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.datalist);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'datalist');
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}
}
