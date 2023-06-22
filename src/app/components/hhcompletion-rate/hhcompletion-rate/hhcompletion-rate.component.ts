import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import { lastValueFrom } from 'rxjs';
import { HouseholdService } from 'src/app/services/household.service';

@Component({
    selector: 'app-hhcompletion-rate',
    templateUrl: './hhcompletion-rate.component.html',
    styleUrls: ['./hhcompletion-rate.component.scss'],
})
export class HhcompletionRateComponent {
    constructor(private householdService: HouseholdService) {}

    datalist: any[] = [];
    title = 'datatables';
    dtOptions: any = {};

    // for csv download
    cols: any[] = [];
    selectedDatalist: any[] = [];
    exportColumns: any[] = [];
    ngOnInit() {
        // for csv download
        this.cols = [
            {
                field: 'state',
                header: 'State',
                customExportHeader: 'Datalist Code',
            },
            {
                field: 'completed',
                header: 'completed',
            },
            {
                field: 'noHhMemberAtHomeOrNoRespondentAtHome',
                header: 'noHhMemberAtHomeOrNoRespondentAtHome',
            },
            {
                field: 'entireHhAbsentAtTimeOfVisit',
                header: 'entireHhAbsentAtTimeOfVisit',
            },
            {
                field: 'postponed',
                header: 'postponed',
            },
            {
                field: 'refused',
                header: 'refused',
            },
            {
                field: 'dwellingVacantOrAddressNotADwelling',
                header: 'dwellingVacantOrAddressNotADwelling',
            },
            {
                field: 'dwellingDestroyed',
                header: 'dwellingDestroyed',
            },
            {
                field: 'dwellingNotFound',
                header: 'dwellingNotFound',
            },
            {
                field: 'other',
                header: 'other',
            },
            {
                field: 'percentVal',
                header: 'percentVal',
            },
            {
                field: 'numberVal',
                header: 'numberVal',
            },
        ];
        this.exportColumns = this.cols.map((col) => ({
            title: col.header,
            dataKey: col.field,
        }));
        // console.log(this.exportColumns);
        this.getdata();
    }

    async getdata() {
        this.datalist = await lastValueFrom(
            this.householdService.getAllHhCompletionRate()
        );
        //this.householdService.getAllEligibleMenPerHh().then()
        //console.log(this.datalist);
    }

    exportPdf() {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then((x) => {
                const doc = new jsPDF.default('l', 'px', 'a3');
                (doc as any).autoTable(this.exportColumns, this.datalist);
                doc.save('hh-completion-rate.pdf');
            });
        });
    }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.datalist);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ['data'],
            };
            const excelBuffer: any = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            this.saveAsExcelFile(excelBuffer, 'datalist');
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE =
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE,
        });
        FileSaver.saveAs(
            data,
            fileName + '_hh-completion-rate_' + new Date().getTime() + EXCEL_EXTENSION
        );
    }
}
