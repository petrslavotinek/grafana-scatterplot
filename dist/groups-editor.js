'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var ScatterPlotGroupsEditorCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function scatterPlotGroupsEditor() {
    'use strict';

    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'public/plugins/petrslavotinek-scatterplot-panel/partials/groups-editor.html',
      controller: ScatterPlotGroupsEditorCtrl
    };
  }

  _export('scatterPlotGroupsEditor', scatterPlotGroupsEditor);

  return {
    setters: [],
    execute: function () {
      _export('ScatterPlotGroupsEditorCtrl', ScatterPlotGroupsEditorCtrl = function ScatterPlotGroupsEditorCtrl($scope) {
        _classCallCheck(this, ScatterPlotGroupsEditorCtrl);

        $scope.editor = this;
        this.panelCtrl = $scope.ctrl;
        this.panel = this.panelCtrl.panel;

        this.panelCtrl.render();
      });

      _export('ScatterPlotGroupsEditorCtrl', ScatterPlotGroupsEditorCtrl);
    }
  };
});
//# sourceMappingURL=groups-editor.js.map
