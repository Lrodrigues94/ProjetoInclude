import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChartModule } from 'primeng/chart';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    SelectButtonModule,
    ChartModule,
    CalendarModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
