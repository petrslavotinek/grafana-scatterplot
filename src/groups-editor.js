export class ScatterPlotGroupsEditorCtrl {
  constructor($scope) {
    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;

    this.panelCtrl.render();
  }
}

export function scatterPlotGroupsEditor() {
  'use strict';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/plugins/petrslavotinek-scatterplot-panel/partials/groups-editor.html',
    controller: ScatterPlotGroupsEditorCtrl,
  };
}
