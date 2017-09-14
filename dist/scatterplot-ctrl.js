'use strict';

System.register(['app/plugins/sdk', 'lodash', 'app/core/core', 'app/core/utils/kbn', './options-editor', './groups-editor', './css/scatter-plot.css!'], function (_export, _context) {
  "use strict";

  var MetricsPanelCtrl, _, contextSrv, kbn, colors, scatterPlotOptionsEditor, scatterPlotGroupsEditor, _createClass, panelDefaults, ScatterPlotCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_appCoreCore) {
      contextSrv = _appCoreCore.contextSrv;
      colors = _appCoreCore.colors;
    }, function (_appCoreUtilsKbn) {
      kbn = _appCoreUtilsKbn.default;
    }, function (_optionsEditor) {
      scatterPlotOptionsEditor = _optionsEditor.scatterPlotOptionsEditor;
    }, function (_groupsEditor) {
      scatterPlotGroupsEditor = _groupsEditor.scatterPlotGroupsEditor;
    }, function (_cssScatterPlotCss) {}],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      panelDefaults = {};

      _export('ScatterPlotCtrl', ScatterPlotCtrl = function (_MetricsPanelCtrl) {
        _inherits(ScatterPlotCtrl, _MetricsPanelCtrl);

        function ScatterPlotCtrl($scope, $injector, $rootScope, timeSrv) {
          _classCallCheck(this, ScatterPlotCtrl);

          var _this = _possibleConstructorReturn(this, (ScatterPlotCtrl.__proto__ || Object.getPrototypeOf(ScatterPlotCtrl)).call(this, $scope, $injector));

          _this.onDataReceived = function (dataList) {
            _this.dataList = dataList;
            _this.data = _this.transformData(dataList);
            _this.render();
          };

          _this.onInitEditMode = function () {
            _this.addEditorTab('Options', scatterPlotOptionsEditor, 2);
            _this.addEditorTab('Groups', scatterPlotGroupsEditor, 3);
            _this.unitFormats = kbn.getUnitFormats();
          };

          _this.onRender = function () {
            if (!_this.dataList) {
              return;
            }
            _this.data = _this.transformData(_this.dataList);
          };

          _this.addGroup = function () {
            var index = _this.groups.length;
            var color = index % colors.length;
            _this.groups.push({
              name: 'Group ' + (index + 1),
              color: color,
              series: []
            });
          };

          _this.dataList = null;
          _this.data = {};
          _this.timeSrv = timeSrv;
          _this.theme = contextSrv.user.lightTheme ? 'light' : 'dark';

          _this.groups = [];

          _.defaultsDeep(_this.panel, panelDefaults);

          _this.events.on('data-received', _this.onDataReceived);
          _this.events.on('data-snapshot-load', _this.onDataReceived);
          _this.events.on('init-edit-mode', _this.onInitEditMode);
          _this.events.on('render', _this.onRender);

          _this.addGroup();
          return _this;
        }

        _createClass(ScatterPlotCtrl, [{
          key: 'transformData',
          value: function transformData(data) {
            // const converter = createConverter(this.panel.aggregate, this.panel.fragment);
            // const { from, to } = this.range || this.timeSrv.timeRange();
            // return converter.convertData(from, to, data);
          }
        }, {
          key: 'link',
          value: function link(scope, elem, attrs, ctrl) {
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
        }]);

        return ScatterPlotCtrl;
      }(MetricsPanelCtrl));

      _export('ScatterPlotCtrl', ScatterPlotCtrl);

      ScatterPlotCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=scatterplot-ctrl.js.map
