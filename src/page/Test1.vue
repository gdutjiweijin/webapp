<template>
  <div class="kpi">
    <ion-app>
      <my-header :activeTab="activeTab" :myDate="myDate" @emitDate="emitDate">
      </my-header>
      <ion-content>
        <date-list :myDate="myDate" @emitDate="emitDate"></date-list>
        <ProductList :activeProduct="activeProduct" :productList="productList" @activeProductChange="activeProductChange"></ProductList>
        <div class="content-wrapper">
          <my-table :tableData="tableData"></my-table>
          <my-chart :optionData="optionData"></my-chart>
        </div>
        <my-tabs></my-tabs>
      </ion-content>
    </ion-app>
  </div>
</template>

<script type="text/ecmascript-6">
import MyHeader from '@/components/Header/Header'
import DateList from '@/components/DateList/DateList';
import MyTabs from '@/components/Tabs/Tabs'
import Table from '@/components/Table/Table';
import NormalEchart from '@/components/Chart/NormalEchart.vue'
import echartOptions from '@/common/js/echartsOptions';
import ProductList from '@/components/ProductList/ProductList'
export default {
    data() {
        return {
            activeTab: 'Test1',
            myDate: new Date().format('yyyyMMdd'),
            tableData: [

              {

                "name" : "Charge",

                "hb" : "0.3212",

                "ztb" : "0.3212",

                "gztb" : "-0.056"

              },
              {

                "name" : "PV",

                "hb" : "0.3212",

                "ztb" : "0.3212",

                "gztb" : "-0.056"

              },
              {

                "name" : "Show",

                "hb" : "0.3212",

                "ztb" : "0.3212",

                "gztb" : "-0.056"

              },
              {

                "name" : "Click",

                "hb" : "0.3212",

                "ztb" : "0.3212",

                "gztb" : "-0.056"

              },
              {

                "name" : "CPM1",

                "hb" : "0.3212",

                "ztb" : "0.3212",

                "gztb" : "-0.056"

              },
              {

                "name" : "CTR2",

                "hb" : "0.3212",

                "ztb" : "0.3212",

                "gztb" : "-0.056"

              },
              {

                "name" : "ACP",

                "hb" : "0.3212",

                "ztb" : "0.3212",

                "gztb" : "-0.056"

              },
              {

                "name" : "ACBS",

                "hb" : "0.3212",

                "ztb" : "0.3212",

                "gztb" : "-0.056"

              }],
            optionData: this._buildOption([
              {

                "date" : "2018-11-01 0:00",

                "value" : 9099123112.3212,

                "ljValue":2143214532.23,

                "hbValue" : 9099123112.3212,

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 0:15",

                "value" : 9099123112.3212,

                "ljValue":2143214532.23,

                "hbValue" : 9099123112.3212,

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 0:30",

                "value" : 9099123112.3212,

                "ljValue":2143214532.23,

                "hbValue" : 9099123112.3212,

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 0:45",

                "value" : 9099123112.3212,

                "ljValue":2143214532.23,

                "hbValue" : 9099123112.3212,

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 1:00",

                "value" : 9099123112.3212,

                "ljValue":2143214532.23,

                "hbValue" : 9099123112.3212,

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 1:15",

                "value" : 9099123112.3212,

                "ljValue":2143214532.23,

                "hbValue" : 9099123112.3212,

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 1:30",

                "value" : 9099123112.3212,

                "ljValue":2143214532.23,

                "hbValue" : 9099123112.3212,

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 1:45",

                "value" : 9099123112.3212,

                "ljValue":2143214532.23,

                "hbValue" : 9099123112.3212,

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 2:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 2:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 2:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 2:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 3:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 3:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 3:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 3:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 4:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 4:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 4:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 4:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 5:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 5:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 5:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 5:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 6:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 6:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 6:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 6:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 7:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 7:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 7:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 7:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 8:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 8:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 8:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 8:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 9:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 9:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 9:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 9:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 10:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 10:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 10:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 10:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 11:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 11:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 11:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 11:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 12:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 12:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 12:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 12:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 13:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 13:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 13:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 13:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 14:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 14:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 14:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 14:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 15:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 15:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 15:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 15:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 16:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 16:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 16:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 16:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 17:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 17:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 17:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 17:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 18:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 18:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 18:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 18:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 19:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 19:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 19:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 19:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 20:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 20:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 20:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 20:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 21:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 21:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 21:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 21:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 22:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 22:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 22:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 22:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 23:00",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 23:15",

                "value" : "29099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 23:30",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              },
              {

                "date" : "2018-11-01 23:45",

                "value" : "239099123112.3212",

                "ljValue":2143214532.23,

                "hbValue" : "239099123112.3212",

                "ljHbValue":2143214532.23,

                "ztbValue" : 2143214532.23,

                "ljZtbValue" :2143214532.23,

                "gztbValue" : 2143214532.23,

                "ljGztbValue" : 2143214532.23

              }
            ]),
            activeProduct: '选项1',
            productList: [{
              name: '选项1'
            }, {
              name: '选项2'
            }]
        }
    },
    created() {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      _buildOption(echartsDatas) {
        let option = echartOptions.realtimeEchartsOption(echartsDatas);
        echartsDatas.forEach(item => {
          option['xAxis'][0]['data'].push(item.date.split(' ')[1]);
          option['series'][0]['data'].push(item.value);
          option['series'][1]['data'].push(item.hbValue);
          option['series'][2]['data'].push(item.ztbValue);
          option['series'][3]['data'].push(item.gztbValue);
        });
        return option;
      },
      emitDate(value) {
        this.myDate = value
      },
      activeProductChange(item) {
        this.activeProduct = item;
      }
    },
    components: {
        'date-list': DateList,
        'my-header': MyHeader,
        'my-tabs': MyTabs,
        'my-table': Table,
        'my-chart': NormalEchart,
        ProductList
    }
}
</script>

<style lang="less">
  @import "../common/css/index.less";
  .content-wrapper {
    height: calc(~'100vh - 190px');
    overflow: scroll;
  }
  .slide-wrapper {
  }
</style>
