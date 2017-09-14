import { MetricsPanelCtrl } from 'app/plugins/sdk';
import _ from 'lodash';
import { contextSrv } from 'app/core/core';
import kbn from 'app/core/utils/kbn';
import { colors } from 'app/core/core';

// import createConverter from './data-converter';
// import aggregates, { aggregatesMap } from './aggregates';
// import fragments, { fragmentsMap } from './fragments';
// import { labelFormats } from './xAxisLabelFormats';
// import svgRendering from './svg/rendering';
// import canvasRendering from './canvas/rendering';
import { scatterPlotOptionsEditor } from './options-editor';
import { scatterPlotGroupsEditor } from './groups-editor';
import './css/scatter-plot.css!';

const panelDefaults = {

};

export class ScatterPlotCtrl extends MetricsPanelCtrl {
  static templateUrl = 'module.html';

  constructor($scope, $injector, $rootScope, timeSrv) {
    super($scope, $injector);

    this.dataList = null;
    this.data = {};
    this.timeSrv = timeSrv;
    this.theme = contextSrv.user.lightTheme ? 'light' : 'dark';

    this.groups = [];

    _.defaultsDeep(this.panel, panelDefaults);

    this.events.on('data-received', this.onDataReceived);
    this.events.on('data-snapshot-load', this.onDataReceived);
    this.events.on('init-edit-mode', this.onInitEditMode);
    this.events.on('render', this.onRender);

    this.addGroup();
  }

  onDataReceived = (dataList) => {
    this.dataList = dataList;
    this.data = this.transformData(dataList);
    this.render();
  }

  onInitEditMode = () => {
    this.addEditorTab('Options', scatterPlotOptionsEditor, 2);
    this.addEditorTab('Groups', scatterPlotGroupsEditor, 3);
    this.unitFormats = kbn.getUnitFormats();
  }

  onRender = () => {
    if (!this.dataList) { return; }
    this.data = this.transformData(this.dataList);
  }

  transformData(data) {
    // const converter = createConverter(this.panel.aggregate, this.panel.fragment);
    // const { from, to } = this.range || this.timeSrv.timeRange();
    // return converter.convertData(from, to, data);
  }

  link(scope, elem, attrs, ctrl) {
    // switch (renderer) {
    //   case CANVAS: {
    //     canvasRendering(scope, elem, attrs, ctrl);
    //     break;
    //   }
    //   case SVG: {
    //     svgRendering(scope, elem, attrs, ctrl);
    //     break;
    //   }
    // }
  }

  addGroup = () => {
    const index = this.groups.length;
    const color = index % colors.length;
    this.groups.push({
      name: `Group ${index + 1}`,
      color,
      series: []
    });
  }
}