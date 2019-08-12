import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BpButtonModule,
  BpCardModule,
  BpTableModule,
  BpListGroupModule,
  BpButtonGroupModule,
  BpTabsModule,
  BpBadgeModule,
  BpBreadcrumbModule,
  BpSpinnerModule,
  BpProgressModule,
} from '@golden-code/bootplus-angular';

import { TabsExampleComponent } from './tabs/tabs-example.component';
import { NavbarExampleComponent } from './navbar/navbar-example.component';
import { TableExampleComponent } from './table/table-example.component';
import { ButtonExampleComponent } from './button/button-example.component';
import { CardExampleComponent } from './card/card-example.component';
import { SpinnerExampleComponent } from './spinner/spinner-example.component';
import { ProgressExampleComponent } from './progress/progress-example.component';
import { BadgeExampleComponent } from './badge/badge-example.component';
import { BreadcrumbExampleComponent } from './breadcrumb/breadcrumb-example.component';
import { ListGroupExampleComponent } from './list-group/list-group-example.component';
import { ButtonGroupExampleComponent } from './button-group/button-group-example.component';

const EXAMPLES = [
    TabsExampleComponent,
    NavbarExampleComponent,
    TableExampleComponent,
    ButtonExampleComponent,
    CardExampleComponent,
    SpinnerExampleComponent,
    ProgressExampleComponent,
    BadgeExampleComponent,
    BreadcrumbExampleComponent,
    ListGroupExampleComponent,
    ButtonGroupExampleComponent
];

@NgModule({
  declarations: EXAMPLES,
  exports: EXAMPLES,
  imports: [
    CommonModule,
    FormsModule,

    BpButtonModule,
    BpCardModule,
    BpBadgeModule,
    BpBreadcrumbModule,
    BpSpinnerModule,
    BpProgressModule,
    BpTabsModule,
    BpTableModule,
    BpListGroupModule,
    BpButtonGroupModule
  ]
})
export class ExampleModule { }
