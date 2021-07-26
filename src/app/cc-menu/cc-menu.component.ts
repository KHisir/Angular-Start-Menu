import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MenuListItem } from './model/list/menuListItem';
import { AnimationType } from './model/tile/animationType';
import { MenuTileItem } from './model/tile/menuTileItem';
import { SizeType } from './model/tile/sizeType';

@Component({
  selector: 'app-cc-menu',
  templateUrl: './cc-menu.component.html',
  styleUrls: ['./cc-menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(300, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({opacity: 0}))
      ])
    ])
  ]
})
export class CcMenuComponent implements OnInit {

  menuDisabled: boolean = true;

  tileList: MenuTileItem[] = [];
  listItems: MenuListItem[] = [];
  AnimationType: any = AnimationType;

  constructor() { }

  ngOnInit() {
    this.tileList = [
      new MenuTileItem('Applications', 'fa-clone', SizeType.Big, 'Create charts, reports or dashboards... Read events... and more!'),
      new MenuTileItem('User Administration', 'fa-users', SizeType.Big, 'Create user, clients or permission groups... Distribute licenses per clients or user.'),
      new MenuTileItem('Data Sources', 'fa-database', SizeType.Big, 'Create data sources or endponints... Select Objects per datasource.'),
      new MenuTileItem('Objects', 'fa-cubes', SizeType.Big),
      new MenuTileItem('Editors', 'fa-object-group'),
      new MenuTileItem('Events', 'fa-bell', SizeType.Medium, '', AnimationType.Flip),
      new MenuTileItem('Mail', 'fa-envelope', SizeType.Small),
      new MenuTileItem('Settings', 'fa-cogs', SizeType.Medium, 'Change language, theme and more...'),
      new MenuTileItem('Productinformation', 'fa-info-circle'),
      new MenuTileItem('Help', 'fa-question-circle', SizeType.Small)
    ];

    this.listItems = [
      new MenuListItem('User', 'fa-user'),
      new MenuListItem('Mail', 'fa-envelope'),
      new MenuListItem('Editor', 'fa-object-group'),
      new MenuListItem('Data Source', 'fa-database'),
      new MenuListItem('Application', 'fa-clone')
    ];

  }

  toggleMenu(): void {
    this.menuDisabled = !this.menuDisabled;
  }

}
