import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/'],
            items:
              [
                {
                  label: 'Eligible Men per household',
                  icon: 'pi pi-bars',
                  routerLink: ['getAllEligibleMenPerHhReport']
                },
              ]

          },
        ],
      },

      // {
      //   items: [
      //     {
      //       label: 'Reports',
      //       items: [
      //         {
      //           label: 'Mens per household',
      //           icon: 'pi pi-bars',
      //           items: [
      //             {
      //               label: 'Eligible Men per household',
      //               icon: 'pi pi-bars',
      //               routerLink: ['getAllEligibleMenPerHhReport']
      //             },
      //             {
      //               label: 'StateWise',
      //               icon: 'pi pi-bars',
      //               // 
      //               items: [
      //                 {
      //                   label: 'Assam',
      //                   icon: 'pi pi-bars',
      //                   routerLink: ['getAllEligibleMenPerHhReportTeamwise/1/Assam'],
      //                   items: [
      //                     {
      //                       label: 'Team 1',
      //                       icon: 'pi pi-bars',
      //                       routerLink: ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                     },

      //                     {
      //                       label: 'Team 2',
      //                       icon: 'pi pi-bars',
      //                       routerLink: ['getAllEligibleMenPerHhMemberwise/1/Assam/2/Team 2']
      //                     },
      //                     {
      //                       label: 'Team 3',
      //                       icon: 'pi pi-bars',
      //                       routerLink: ['getAllEligibleMenPerHhMemberwise/1/Assam/3/Team 3']
      //                     },
      //                     {
      //                       label: 'Team 4',
      //                       icon: 'pi pi-bars',
      //                       routerLink: ['getAllEligibleMenPerHhMemberwise/1/Assam/4/Team 4']
      //                     }

      //                   ]
      //                 },
      //                 {
      //                   label: 'Bihar (North)',
      //                   icon: 'pi pi-bars',
      //                   routerLink: ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)'],
      //                   items: [
      //                     { label: 'Team 1', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/2/Bihar (North)/1/Team 1'] },
      //                     { label: 'Team 2', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/2/Bihar (North)/2/Team 2'] },
      //                     { label: 'Team 3', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/2/Bihar (North)/3/Team 3'] }
      //                   ]
      //                 },
      //                 {
      //                   label: 'Bihar (South)',
      //                   icon: 'pi pi-bars',
      //                   routerLink: ['getAllEligibleMenPerHhReportTeamwise/3/Bihar (South)'],
      //                   items: [
      //                     { label: 'Team 1', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/3/Bihar (South)/1/Team 1'] },
      //                     { label: 'Team 2', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/3/Bihar (South)/2/Team 2'] },
      //                     { label: 'Team 3', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/3/Bihar (South)/3/Team 3'] }
      //                   ]

      //                 },
      //                 {
      //                   label: 'Tamil Nadu - South',
      //                   icon: 'pi pi-bars',
      //                   routerLink: ['getAllEligibleMenPerHhReportTeamwise/4/Tamil Nadu - South'],
      //                   items: [
      //                     { label: 'Team 1', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/4/Tamil Nadu - South/1/Team 1'] },
      //                     { label: 'Team 2', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/4/Tamil Nadu - South/2/Team 2'] },
      //                     { label: 'Team 3', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/4/Tamil Nadu - South/3/Team 3'] },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Manipur',
      //                   icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/5/Manipur',
      //                   items: [
      //                     { label: 'Team 1', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/5/Manipur/1/Team 1'] },
      //                     { label: 'Team 2', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/5/Manipur/2/Team 2'] },
      //                     { label: 'Team 3', icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/5/Manipur/3/Team 3'] },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Meghalaya', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/6/Meghalaya',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Mizoram', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/7/Mizoram',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Sikkim', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/8/Sikkim',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Andhra Pradesh & AN', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/11/Andhra Pradesh & AN',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Himachal Pradesh', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/14/Himachal Pradesh',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Jammu & Kashmir', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/15/Jammu & Kashmir',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Kerala & Lakshadweep', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/18/Kerala & Lakshadweep',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Maharashtra (East)', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/19/Maharashtra (East)',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Maharashtra (West)', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/20/Maharashtra (West)',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Arunachal Pradesh', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/22/Arunachal Pradesh',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Tamil Nadu - North & Puducherry', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/36/Tamil Nadu - North & Puducherry',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Gujarat (East)', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/12/Gujarat (East)',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Rajasthan (East)', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/28/Rajasthan (East)',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Rajasthan (West)', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/37/Rajasthan (West)',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //                 {
      //                   label: 'Nagaland', icon: 'pi pi-bars',
      //                   routerLink: 'getAllEligibleMenPerHhReportTeamwise/39/Nagaland',
      //                   items: [
      //                     { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
      //                     { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
      //                   ],
      //                 },
      //               ]
      //             },
      //             // {
      //             //     label: 'MemberWise',
      //             //     icon: 'pi pi-bars',
      //             //     // 
      //             //     items: [
      //             //         {
      //             //           label: 'Team 1',
      //             //           icon: 'pi pi-bars',
      //             //           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //             //         },

      //             //         {
      //             //             label: 'Team 2',
      //             //             icon: 'pi pi-bars',
      //             //             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //             //           },
      //             //           {
      //             //             label: 'Team 3',
      //             //             icon: 'pi pi-bars',
      //             //             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //             //           },
      //             //           {
      //             //             label: 'Team 4',
      //             //             icon: 'pi pi-bars',
      //             //             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //             //           }
            
      //             //     ]
      //             // }
      //           ],
      //         },
      //       ],
      //     }
      //   ] 
      // },






      
      {

          label: 'Reports',
          items: [
              {
                  label: 'Mens per household',
                  icon: 'pi pi-bars',
                  items: [
                      {
                          label: 'Eligible Men per household',
                          icon: 'pi pi-bars',
                         routerLink  : ['getAllEligibleMenPerHhReport']
                      },
                      {
                          label: 'StateWise',
                          icon: 'pi pi-bars',
                          // 
                          items: [
                              {
                                label: 'Assam',
                                icon: 'pi pi-bars',
                                routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam'],
                                items: [
                                  {
                                    label: 'Team 1',
                                    icon: 'pi pi-bars',
                                    routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
                                  },

                                  {
                                      label: 'Team 2',
                                      icon: 'pi pi-bars',
                                      routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/2/Team 2']
                                    },
                                    {
                                      label: 'Team 3',
                                      icon: 'pi pi-bars',
                                      routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/3/Team 3']
                                    },
                                    {
                                      label: 'Team 4',
                                      icon: 'pi pi-bars',
                                      routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/4/Team 4']
                                    }




                              ]
                              },
                              {
                                  label: 'Bihar (North)',
                                  icon: 'pi pi-bars',
                                  routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)'],
                                  items: [
                                    { label: 'Team 1',
                                    icon: 'pi pi-bars', 
                                    routerLink: ['getAllEligibleMenPerHhMemberwise/2/Bihar (North)/1/Team 1'] 
                                  },
                                    { label: 'Team 2',
                                    icon: 'pi pi-bars', 
                                    routerLink: ['getAllEligibleMenPerHhMemberwise/2/Bihar (North)/2/Team 2'] 
                                  },
                                    { label: 'Team 3',
                                    icon: 'pi pi-bars', 
                                    routerLink: ['getAllEligibleMenPerHhMemberwise/2/Bihar (North)/3/Team 3'] 
                                  }
                                  ]
                                },
                                {
                                  label: 'Bihar (South)',
                                  icon: 'pi pi-bars',
                                  routerLink: ['getAllEligibleMenPerHhReportTeamwise/3/Bihar (South)'],
                                  items:[
                                    { label: 'Team 1',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/3/Bihar (South)/1/Team 1'] },
                                    { label: 'Team 2',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/3/Bihar (South)/2/Team 2'] },
                                    { label: 'Team 3',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/3/Bihar (South)/3/Team 3'] }
                                  ]

                                },
                                {
                                  label: 'Tamil Nadu - South',
                                  icon: 'pi pi-bars',
                                  routerLink: ['getAllEligibleMenPerHhReportTeamwise/4/Tamil Nadu - South'],
                                  items: [
                                    { label: 'Team 1',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/4/Tamil Nadu - South/1/Team 1'] },
                                    { label: 'Team 2',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/4/Tamil Nadu - South/2/Team 2'] },
                                    { label: 'Team 3',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/4/Tamil Nadu - South/3/Team 3'] },
                                  ],
                                },
                                {
                                  label: 'Manipur',
                                  icon: 'pi pi-bars',
                                  routerLink: ['getAllEligibleMenPerHhReportTeamwise/5/Manipur'],
                                  items: [
                                    { label: 'Team 1',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/5/Manipur/1/Team 1'] },
                                    { label: 'Team 2',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/5/Manipur/2/Team 2'] },
                                    { label: 'Team 3',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/5/Manipur/3/Team 3'] },
                                  ],
                                },
                                {
                                  label: 'Meghalaya',icon: 'pi pi-bars',
                                  routerLink: ['getAllEligibleMenPerHhReportTeamwise/6/Meghalaya'],
                                  items: [
                                    { label: 'Team 1',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/6/Meghalaya/1/Team 1'] },
                                    { label: 'Team 2',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/6/Meghalaya/2/Team 2'] },
                                    { label: 'Team 3',icon: 'pi pi-bars', routerLink: ['getAllEligibleMenPerHhMemberwise/6/Meghalaya/3/Team 3'] },
                                  ],
                                },
                                {
                                  label: 'Mizoram',icon: 'pi pi-bars',
                                  routerLink: ['getAllEligibleMenPerHhReportTeamwise/7/Mizoram'],
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhMemberwise/7/Mizoram/1/Team 1' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhMemberwise/7/Mizoram/2/Team 2' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhMemberwise/7/Mizoram/1/Team 3' },
                                  ],
                                },
                                {
                                  label: 'Sikkim',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/8/Sikkim',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhMemberwise/7/Sikkim/1/Team 1' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhMemberwise/7/Sikkim/2/Team 2' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhMemberwise/7/Sikkim/3/Team 3' },
                                  ],
                                },
                                {
                                  label: 'Andhra Pradesh & AN',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/11/Andhra Pradesh & AN',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhMemberwise/7/Andhra Pradesh & AN/1/Team 1' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhMemberwise/7/Andhra Pradesh & AN/1/Team 1' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhMemberwise/7/Andhra Pradesh & AN/1/Team 1' },
                                  ],
                                },
                                {
                                  label: 'Himachal Pradesh',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/14/Himachal Pradesh',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                }, 
                                {
                                  label: 'Jammu & Kashmir',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/15/Jammu & Kashmir',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                                {
                                  label: 'Kerala & Lakshadweep',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/18/Kerala & Lakshadweep',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                                {
                                  label: 'Maharashtra (East)',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/19/Maharashtra (East)',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                                {
                                  label: 'Maharashtra (West)',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/20/Maharashtra (West)',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                                {
                                  label: 'Arunachal Pradesh',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/22/Arunachal Pradesh',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                                {
                                  label: 'Tamil Nadu - North & Puducherry',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/36/Tamil Nadu - North & Puducherry',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                                {
                                  label: 'Gujarat (East)',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/12/Gujarat (East)',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                                {
                                  label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                                {
                                  label: 'Rajasthan (East)',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/28/Rajasthan (East)',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                                {
                                  label: 'Rajasthan (West)',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/37/Rajasthan (West)',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                                {
                                  label: 'Nagaland',icon: 'pi pi-bars',
                                  routerLink: 'getAllEligibleMenPerHhReportTeamwise/39/Nagaland',
                                  items: [
                                    { label: 'Team 1', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 2', routerLink: 'getAllEligibleMenPerHhReport' },
                                    { label: 'Team 3', routerLink: 'getAllEligibleMenPerHhReport' },
                                  ],
                                },
                          ]
                      },
                      
                  ],
              },
            ],
          },



          {
            status: 'social',
            items:[
                {
                label: 'Household Completion Rate',
                
                icon: 'pi pi-bars',
                items: [
                    {
                        label: 'Household Completion Rate',
                        icon: 'pi pi-bars',
                        routerLink: ['getAllHhCompletionRate'],
                    },
                    {
                        label: 'StateWise',
                        icon: 'pi pi-bars',
                        
                        items: [
                            {
                                label: 'Assam',
                                icon: 'pi pi-bars',
                                routerLink: ['getAllHhCompletionRateTeamwise/1/Assam'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/1/Assam/1/Team 1'
                                        ],
                                    },

                                    {
                                        label: 'Team 2',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/1/Assam/2/Team 2'
                                        ],
                                    },
                                    {
                                        label: 'Team 3',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/1/Assam/3/Team 3'
                                        ],
                                    },
                                    {
                                        label: 'Team 4',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/1/Assam/4/Team 4'
                                        ],
                                    },
                                ],
                            },
                            {
                                label: 'Bihar (North)',
                                icon: 'pi pi-bars',
                                routerLink: [
                                    'getAllHhCompletionRateTeamwise/2/Bihar (North)'
                                ],
                                items: [
                                    {
                                        label: 'Team 1',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/2/Bihar (North)/1/Team 1'
                                        ],
                                    },
                                    {
                                        label: 'Team 2',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/2/Bihar (North)/2/Team 2'
                                        ],
                                    },
                                    {
                                        label: 'Team 3',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/2/Bihar (North)/3/Team 3'
                                        ],
                                    },
                                ],
                            },
                            {
                                label: 'Bihar (South)',
                                icon: 'pi pi-bars',
                                routerLink: [
                                    'getAllHhCompletionRateTeamwise/3/Bihar (South)'
                                ],
                                items: [
                                    {
                                        label: 'Team 1',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/3/Bihar (South)/1/Team 1'
                                        ],
                                    },
                                    {
                                        label: 'Team 2',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/3/Bihar (South)/2/Team 2'
                                        ],
                                    },
                                    {
                                        label: 'Team 3',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/3/Bihar (South)/3/Team 3'
                                        ],
                                    },
                                ],
                            },
                            {
                                label: 'Tamil Nadu - South',
                                icon: 'pi pi-bars',
                                routerLink: [
                                    'getAllHhCompletionRateTeamwise/4/Tamil Nadu - South'
                                ],
                                items: [
                                    {
                                        label: 'Team 1',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/4/Tamil Nadu - South/1/Team 1'
                                        ],
                                    },
                                    {
                                        label: 'Team 2',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/4/Tamil Nadu - South/2/Team 2'
                                        ],
                                    },
                                    {
                                        label: 'Team 3',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/4/Tamil Nadu - South/3/Team 3'
                                        ],
                                    },
                                ],
                            },
                            {
                                label: 'Manipur',
                                icon: 'pi pi-bars',
                                routerLink: [
                                    'getAllHhCompletionRateTeamwise/5/Manipur'
                                ],
                                items: [
                                    {
                                        label: 'Team 1',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/5/Manipur/1/Team 1'
                                        ],
                                    },
                                    {
                                        label: 'Team 2',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/5/Manipur/2/Team 2'
                                        ],
                                    },
                                    {
                                        label: 'Team 3',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/5/Manipur/3/Team 3'
                                        ],
                                    },
                                ],
                            },
                            {
                                label: 'Meghalaya',
                                icon: 'pi pi-bars',
                                routerLink: [
                                    'getAllHhCompletionRateTeamwise/6/Meghalaya'
                                ],
                                items: [
                                    {
                                        label: 'Team 1',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/6/Meghalaya/1/Team 1'
                                        ],
                                    },
                                    {
                                        label: 'Team 2',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/6/Meghalaya/2/Team 2'
                                        ],
                                    },
                                    {
                                        label: 'Team 3',
                                        icon: 'pi pi-bars',
                                        routerLink: [
                                            'getAllHhCompletionRateMemberwise/6/Meghalaya/3/Team 3'
                                        ],
                                    },
                                ],
                            },
                            {
                                label: 'Mizoram',
                                icon: 'pi pi-bars',
                                routerLink: [
                                    'getAllHhCompletionRateTeamwise/7/Mizoram'
                                ],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                            ['getAllHhCompletionRateMemberwise/7/Mizoram/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                            ['getAllHhCompletionRateMemberwise/7/Mizoram/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                            ['getAllHhCompletionRateMemberwise/7/Mizoram/1/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Sikkim',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/8/Sikkim'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                            ['getAllHhCompletionRateMemberwise/8/Sikkim/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                            ['getAllHhCompletionRateMemberwise/8/Sikkim/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                            ['getAllHhCompletionRateMemberwise/8/Sikkim/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Andhra Pradesh & AN',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/11/Andhra Pradesh & AN'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                            ['getAllHhCompletionRateMemberwise/11/Andhra Pradesh & AN/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                            ['getAllHhCompletionRateMemberwise/11/Andhra Pradesh & AN/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                            ['getAllHhCompletionRateMemberwise/11/Andhra Pradesh & AN/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Himachal Pradesh',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/14/Himachal Pradesh'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                            ['getAllHhCompletionRateMemberwise/14/Himachal Pradesh/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/14/Himachal Pradesh/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/14/Himachal Pradesh/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Jammu & Kashmir',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/15/Jammu & Kashmir'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/15/Jammu & Kashmir/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/15/Jammu & Kashmir/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/15/Jammu & Kashmir/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Kerala & Lakshadweep',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/18/Kerala & Lakshadweep'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/18/Kerala & Lakshadweep/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/18/Kerala & Lakshadweep/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/18/Kerala & Lakshadweep/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Maharashtra (East)',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/19/Maharashtra (East)'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/19/Maharashtra (East)/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/19/Maharashtra (East)/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/19/Maharashtra (East)/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Maharashtra (West)',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/20/Maharashtra (West)'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/20/Maharashtra (West)/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/20/Maharashtra (West)/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/20/Maharashtra (West)/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Arunachal Pradesh',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/22/Arunachal Pradesh'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/22/Arunachal Pradesh/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/22/Arunachal Pradesh/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/22/Arunachal Pradesh/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Tamil Nadu - North & Puducherry',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/36/Tamil Nadu - North & Puducherry'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/36/Tamil Nadu - North & Puducherry/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/36/Tamil Nadu - North & Puducherry/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/36/Tamil Nadu - North & Puducherry/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Gujarat (East)',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/12/Gujarat (East)'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/12/Gujarat (East)/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/12/Gujarat (East)/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/12/Gujarat (East)/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Gujarat (West) Daman Diu & Dadra Nagar Haweli',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/13/Gujarat (West) Daman Diu & Dadra Nagar Haweli/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Rajasthan (East)',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/28/Rajasthan (East)'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/28/Rajasthan (East)/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/28/Rajasthan (East)/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/28/Rajasthan (East)/3/Team 3'],
                                    },
                                ],
                            },
                            {
                                label: 'Rajasthan (West)',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/37/Rajasthan (West)'],
                                    items: [
                                        {
                                            label: 'Team 1',
                                            routerLink:
                                            ['getAllHhCompletionRateMemberwise/37/Rajasthan (West)/1/Team 1'],
                                        },
                                        {
                                            label: 'Team 2',
                                            routerLink:
                                            ['getAllHhCompletionRateMemberwise/37/Rajasthan (West)/2/Team 2'],
                                        },
                                        {
                                            label: 'Team 3',
                                            routerLink:
                                            ['getAllHhCompletionRateMemberwise/37/Rajasthan (West)/3/Team 3'],
                                        },
                                    ],
                            },
                            {
                                label: 'Nagaland',
                                icon: 'pi pi-bars',
                                routerLink:
                                    ['getAllHhCompletionRateTeamwise/39/Nagaland'],
                                items: [
                                    {
                                        label: 'Team 1',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/39/Nagaland/1/Team 1'],
                                    },
                                    {
                                        label: 'Team 2',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/39/Nagaland/2/Team 2'],
                                    },
                                    {
                                        label: 'Team 3',
                                        routerLink:
                                        ['getAllHhCompletionRateMemberwise/39/Nagaland/3/Team 3'],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
      // {
      //       items: [
      //         {
      //          label: 'Women per household',
      //          icon: 'pi pi-bars',
      //         items: [
      //             {
      //                 label: 'Eligible Women per household',
      //                 icon: 'pi pi-bars',
      //                 routerLink : ['getAllEligibleWomenPerHhReport']
      //             },
      //             {
      //                 label: 'StateWise',
      //                 icon: 'pi pi-bars',
      //                 // 
      //                 items: [
      //                     {
      //                       label: 'Assam',
      //                       icon: 'pi pi-bars',
      //                       routerLink : ['getAllEligibleWomenPerHhReportTeamwise/1/Assam']
      //                     },
      //                     {
      //                         label: 'Bihar (North)',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleWomenPerHhReportTeamwise/2/Bihar (North)']
      //                       }
      //                 ]
      //             },
      //             {
      //                 label: 'MemberWise',
      //                 icon: 'pi pi-bars',
      //                 // 
      //                 items: [
      //                     {
      //                       label: 'Team 1',
      //                       icon: 'pi pi-bars',
      //                       routerLink : ['getAllEligibleWomenPerHhMemberwise/1/Assam/1/Team 1']
      //                     },

      //                     {
      //                         label: 'Team 2',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleWomenPerHhMemberwise/1/Assam/1/Team 2']
      //                       },
      //                       {
      //                         label: 'Team 3',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleWomenPerHhMemberwise/1/Assam/1/Team 3']
      //                       },
      //                       {
      //                         label: 'Team 4',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleWomenPerHhMemberwise/1/Assam/1/Team 4']
      //                       }

      //                 ]
      //             }
      //         ],
      //     },
      //   ],
      // },

      //     {

      //       items: [
      //         {
      //         label: 'Household Visits',
      //         icon: 'pi pi-bars',
      //         items: [
      //             {
      //                 label: 'Household Visits',
      //                 icon: 'pi pi-bars',
      //                 routerLink : ['getAllEligibleMenPerHhReport']
      //             },
      //             {
      //                 label: 'StateWise',
      //                 icon: 'pi pi-bars',
      //                 // 
      //                 items: [
      //                     {
      //                       label: 'Assam',
      //                       icon: 'pi pi-bars',
      //                       routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                     },
      //                     {
      //                         label: 'Bihar (North)',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                       }
      //                 ]
      //             },
      //             {
      //                 label: 'MemberWise',
      //                 icon: 'pi pi-bars',
      //                 // 
      //                 items: [
      //                     {
      //                       label: 'Team1',
      //                       icon: 'pi pi-bars',
      //                       routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                     },

      //                     {
      //                         label: 'Team2',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                       },
      //                       {
      //                         label: 'Team2',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                       },
      //                       {
      //                         label: 'Team2',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                       }

      //                 ]
      //             }
      //         ],
      //     },
      //   ],
      // },

      //     {

      //       items: [
      //         {
      //         label: 'Household Comoletion Rate',
      //         icon: 'pi pi-bars',
      //         items: [
      //             {
      //                 label: 'Household Comoletion Rate',
      //                 icon: 'pi pi-bars',
      //                 routerLink : ['getAllEligibleMenPerHhReport']
      //             },
      //             {
      //                 label: 'StateWise',
      //                 icon: 'pi pi-bars',
      //                 // 
      //                 items: [
      //                     {
      //                       label: 'Assam',
      //                       icon: 'pi pi-bars',
      //                       routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                     },
      //                     {
      //                         label: 'Bihar (North)',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                       }
      //                 ]
      //             },
      //             {
      //                 label: 'MemberWise',
      //                 icon: 'pi pi-bars',
      //                 // 
      //                 items: [
      //                     {
      //                       label: 'Team1',
      //                       icon: 'pi pi-bars',
      //                       routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                     },

      //                     {
      //                         label: 'Team2',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                       },
      //                       {
      //                         label: 'Team2',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                       },
      //                       {
      //                         label: 'Team2',
      //                         icon: 'pi pi-bars',
      //                         routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                       }

      //                 ]
      //             }
      //         ],
      //     },
      //   ],
      // },

      //         {
      //             label: 'Age displacement: men (lower limit)',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Age displacement: men (lower limit)',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },

      //         {
      //             label: 'Age displacement: men (upper limit)',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Age displacement: men (upper limit)',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },
      //         {
      //             label: 'Age displacement: women (lower limit)',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Age displacement: women (lower limit)',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },
      //         {
      //             label: 'Age displacement: women (upper limit)',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Age displacement: women (upper limit)',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },
      //         {
      //             label: 'Eligible Woman Response Rate',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Eligible Woman Response Rate',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },
      //         {
      //             label: 'Eligible Man Response Rate',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Eligible Man Response Rate',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },
      //         {
      //             label: 'Women 15-49 visits',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Women 15-49 visit',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },
      //         {
      //             label: 'Men 15-54 visits',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Men 15-54 visits',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },
      //         {
      //             label: 'Household Relation Module',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Household Relation Module',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },
      //         {
      //             label: 'Contraceptive Prevalence rate',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Contraceptive Prevalence rate',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },
      //         {
      //             label: 'Vaccination Health Cards',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Vaccination Health Cards',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },
      //         {
      //             label: 'Birth Displacement',
      //             icon: 'pi pi-bars',
      //             items: [
      //                 {
      //                     label: 'Birth Displacement',
      //                     icon: 'pi pi-bars',
      //                     routerLink : ['getAllEligibleMenPerHhReport']
      //                 },
      //                 {
      //                     label: 'StateWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Assam',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhReportTeamwise/1/Assam']
      //                         },
      //                         {
      //                             label: 'Bihar (North)',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhReportTeamwise/2/Bihar (North)']
      //                           }
      //                     ]
      //                 },
      //                 {
      //                     label: 'MemberWise',
      //                     icon: 'pi pi-bars',
      //                     // 
      //                     items: [
      //                         {
      //                           label: 'Team1',
      //                           icon: 'pi pi-bars',
      //                           routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 1']
      //                         },

      //                         {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 2']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 3']
      //                           },
      //                           {
      //                             label: 'Team2',
      //                             icon: 'pi pi-bars',
      //                             routerLink : ['getAllEligibleMenPerHhMemberwise/1/Assam/1/Team 4']
      //                           }

      //                     ]
      //                 }
      //             ],
      //         },

      //     ],
      // },

      // {

      //    items: [
      //       {
      //   label: 'Bale Tracking',
      //   icon: 'pi pi-bars',
      //   items: [
      //     {
      //       label: 'View Bale Tracking',
      //       icon: 'pi pi-bars',
      //       routerLink: ['/bale/search/byUbin'],
      //       items:
      //         [
      //           {
      //             label: 'Eligible Men per household',
      //             icon: 'pi pi-bars',
      //             routerLink: ['getAllEligibleMenPerHhReport'],
                  
      //           },
      //           {
      //             label: 'Eligible Men per household',
      //             icon: 'pi pi-bars',
      //             routerLink: ['/'],
      //           },
      //         ]
      //     },
      //     {
      //       label: 'Update Bale Tracking',
      //       icon: 'pi pi-bars',
      //       routerLink: ['/bale/tracking/update'],
      //       items:
      //         [
      //           {
      //             label: 'Eligible Men per household',
      //             icon: 'pi pi-bars',
      //             routerLink: ['getAllEligibleMenPerHhReport']
      //           },
      //           {
      //             label: 'Eligible Men per household',
      //             icon: 'pi pi-bars',
      //             routerLink: ['/'],
      //           },
      //         ]
      //     }
      //   ],
      // },

      //      ],
      //  },
      // {

      //   items: [
      //     {
      //       label: 'Bale',
      //       icon: 'pi pi-bars',
      //       items: [
      //         {
      //           label: 'List All Bales',
      //           icon: 'pi pi-bars',
      //           routerLink: ['/bale/list'],


      //         },
      //         {
      //           label: 'View Bales Details',
      //           icon: 'pi pi-bars',
      //           routerLink: ['/bale/details/view']
      //         }
      //       ],
      //     },
      //   ],
      // },




// Replica of bale and bale tracking

    //   {

    //     items: [
    //        {
    //    label: 'Bale Tracking',
    //    icon: 'pi pi-bars',
    //    items: [
    //      {
    //        label: 'View Bale Tracking',
    //        icon: 'pi pi-bars',
    //        routerLink: ['/bale/search/byUbin'],
    //        items:
    //          [
    //            {
    //              label: 'Eligible Men per household',
    //              icon: 'pi pi-bars',
    //              routerLink: ['getAllEligibleMenPerHhReport']
    //            },
    //            {
    //              label: 'Eligible Men per household',
    //              icon: 'pi pi-bars',
    //              routerLink: ['/'],
    //            },
    //          ]
    //      },
    //      {
    //        label: 'Update Bale Tracking',
    //        icon: 'pi pi-bars',
    //        routerLink: ['/bale/tracking/update'],
    //        items:
    //          [
    //            {
    //              label: 'Eligible Men per household',
    //              icon: 'pi pi-bars',
    //              routerLink: ['getAllEligibleMenPerHhReport']
    //            },
    //            {
    //              label: 'Eligible Men per household',
    //              icon: 'pi pi-bars',
    //              routerLink: ['/'],
    //            },
    //          ]
    //      }
    //    ],
    //  },

    //       ],
    //   },
    //  {

    //    items: [
    //      {
    //        label: 'Bale',
    //        icon: 'pi pi-bars',
    //        items: [
    //          {
    //            label: 'List All Bales',
    //            icon: 'pi pi-bars',
    //            routerLink: ['/bale/list'],


    //          },
    //          {
    //            label: 'View Bales Details',
    //            icon: 'pi pi-bars',
    //            routerLink: ['/bale/details/view']
    //          }
    //        ],
    //      },
    //    ],
    //  },
      // {
      //     label: 'Scan QR Code',
      //     items: [
      //         {
      //             label: 'Scan QR Code',
      //             icon: 'pi pi-bars',
      //             routerLink : ['/search-bale']
      //         },
      //     ],
      // },
    ];
  }
}
