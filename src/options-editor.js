import kbn from 'app/core/utils/kbn';

export class ScatterPlotOptionsEditorCtrl {
  constructor($scope) {
    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.unitFormats = kbn.getUnitFormats();

    this.panelCtrl.render();
  }

  setUnitFormat(subItem) {
    // this.panel.data.unitFormat = subItem.value;
    this.panelCtrl.render();
  }
}

export function scatterPlotOptionsEditor() {
  'use strict';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/plugins/petrslavotinek-scatterplot-panel/partials/options-editor.html',
    controller: ScatterPlotOptionsEditorCtrl,
  };
}
