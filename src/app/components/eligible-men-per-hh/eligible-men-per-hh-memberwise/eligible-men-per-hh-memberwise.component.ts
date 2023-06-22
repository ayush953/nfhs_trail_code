import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
  selector: 'app-eligible-men-per-hh-memberwise',
  templateUrl: './eligible-men-per-hh-memberwise.component.html',
  styleUrls: ['./eligible-men-per-hh-memberwise.component.scss']
})
export class EligibleMenPerHhMemberwiseComponent implements OnInit{
  constructor(
    private householdService: HouseholdService,
    private route: ActivatedRoute
  ) {}

  datalist: any[]=[];
  title = 'datatables';
  // dtOptions: any = {};
  stateId!: string | null;
  stateName!: string | null;
  teamNo!: string | null;
  teamName!: string | null;

// for csv download
  cols: any[]=[];                
selectedDatalist: any[]=[];    
exportColumns :any[]=[];
  
  
  //my change
  //formModal: any;
  //dtoptions : DataTables.Settings={};
  //dtTrigger : Subject<any> = new Subject<any>();
  
  // ngOnInit() {
    
                                                             
  //   this.stateId = this.route.snapshot.paramMap.get('stateId');
  //   this.stateName = this.route.snapshot.paramMap.get('stateName');
  //   this.teamNo = this.route.snapshot.paramMap.get('teamNo');
  //   this.teamName = this.route.snapshot.paramMap.get('teamName');
  //   console.log(this.stateId);
  //   console.log(this.stateName);
  //   this.formModal.show();
  //   this.householdService
  //     .getAllEligibleMenPerHhMemberwise(this.stateId,this.teamNo)
  //     .subscribe(
  //       (datalist) => {
  //         console.log(datalist);
  //         this.datalist = datalist;
  //         setTimeout(() => {
  //           $('#myTable').DataTable({
  //             pagingType: 'full_numbers',
  //             pageLength: 10,
  //             processing: true,
  //             scrollY: '300px',
  //             lengthMenu: [5, 10, 25],
  //             dom: 'Blfrtip',
              
  //           });
  //         }, 1);
  //         this.datalist.destroy;
  //       },
  //       (error) => console.error(error)
  //     );
  // }
 //}

  //mychange
  ngOnInit() {

    this.cols = [                
      { field: 'member', header: 'Members', customExportHeader: 'Datalist Code' },
      { field: 'noOfCompletedHhUrban', header: 'Number of Completed Households (Urban)' },
      { field: 'noOfDeFactoEligibleMenInCompletedHhUrban', header: 'Number of de facto eligible men in those HHs (Urban)' },
      { field: 'meanNoOfDeFactoEligibleMenPerHhUrban', header: 'Mean number of de facto eligible men per HH (Urban)' },
      { field: 'noOfCompletedHhRural', header: 'Number of Completed Households (Rural)' },
      { field: 'noOfDeFactoEligibleMenInCompletedHhRural', header: 'Number of de facto eligible men in those HHs (Rural)' },
      { field: 'meanNoOfDeFactoEligibleMenPerHhRural', header: 'Mean number of de facto eligible men per HH (Rural)' }
    
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

    this.stateId = this.route.snapshot.paramMap.get('stateId');
    this.stateName = this.route.snapshot.paramMap.get('stateName');
    this.teamNo = this.route.snapshot.paramMap.get('teamNo');
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    console.log(this.stateId);
    console.log(this.stateName);

    this.householdService.getAllEligibleMenPerHhMemberwise(this.stateId,this.teamNo).subscribe(
      (datalist) => {
        console.log(datalist);
        this.datalist = datalist;
      },
  //   this.dtoptions={
  //     pagingType: `full_numbers`,
  //     paging: true,
  //     searching: true,

  //     scrollX: true,
  //     //"bDestroy":true,
  //     lengthMenu: [10, 25, 50, 100],
  //     dom: 'Blfrtip',
  //     language:{
  //       searchPlaceholder:'search'
  //     }

  //   }

  //   this.openFormModal();
  //  }
  
  
  //  openFormModal() {
  //   // this.formModal.show();
  //   //this.householdService.getAllEligibleMenPerHh().subscribe(
  //     this.householdService.getAllEligibleMenPerHhMemberwise(this.stateId,this.teamNo).subscribe(
     
  //      result=>{
  
  //           this.datalist=result;
  //         this.dtTrigger.next(null);
  //       this.datalist.destroy;
  //      }
       
  //   );
    
    );
}

exportPdf() {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
          const doc = new jsPDF.default('l', 'px', 'a3');
          (doc as any).autoTable(this.exportColumns, this.datalist);
          doc.save('men-per-hh-memberwise.pdf');
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
