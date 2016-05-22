var widgets = require('jupyter-js-widgets');
var _ = require('underscore');
var Chart = require('chart.js');

var resizeDetector = require("element-resize-detector")({
      strategy: "scroll" //<- For ultra performance.
});


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including `_model_name`, `_view_name`, `_model_module`
// and `_view_module` when different from the base class.
//
// When serialiazing entire widget state for embedding, only values different from the
// defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend({}, widgets.DOMWidgetModel.prototype.defaults, {
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'pychartjs',
        _view_module : 'pychartjs',
        value : 'Hello World'
    })
});


// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({
    render: function() {
//      this.el.

      var canvas = document.createElement("canvas");
      this.el.appendChild(canvas);

      this.displayed.then(function() {
        console.log("canvas.width: " + canvas.width);
        console.log("canvas.height: " + canvas.height);
      var myChart = new Chart(canvas, {
          type: 'bar',
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
    });

//      var ctx = canvas.getContext("2d");

/*
        console.log("before Chart");
        console.log("-----");
        console.log("ctx.canvas.width: " + ctx.canvas.width);
        console.log("parseInt(Chart.helpers.getStyle(ctx.canvas, 'width')): " + parseInt(Chart.helpers.getStyle(ctx.canvas, 'width')));
        console.log("Chart.helpers.getMaximumWidth(ctx.canvas): " + Chart.helpers.getMaximumWidth(ctx.canvas));
        var w = ctx.canvas.width || parseInt(Chart.helpers.getStyle(ctx.canvas, 'width')) || Chart.helpers.getMaximumWidth(ctx.canvas);
        console.log("width: " + w);
        console.log("test: " + (w !== Chart.helpers.getMaximumWidth(ctx.canvas)));
        console.log("ctx.canvas.height: " + ctx.canvas.height);
        console.log("parseInt(Chart.helpers.getStyle(ctx.canvas, 'height')): " + parseInt(Chart.helpers.getStyle(ctx.canvas, 'height')));
        console.log("Chart.helpers.getMaximumHeight(ctx.canvas): " + Chart.helpers.getMaximumHeight(ctx.canvas));
        console.log("height: " + ctx.canvas.height || parseInt(Chart.helpers.getStyle(ctx.canvas, 'height')) || Chart.helpers.getMaximumHeight(ctx.canvas));
        console.log("window.devicePixelRatio: " + window.devicePixelRatio);
        console.log("-----");
*/


/*
        console.log("after Chart");
        console.log("-----");
        console.log("ctx.canvas.width: " + ctx.canvas.width);
        console.log("parseInt(Chart.helpers.getStyle(ctx.canvas, 'width')): " + parseInt(Chart.helpers.getStyle(ctx.canvas, 'width')));
        console.log("Chart.helpers.getMaximumWidth(ctx.canvas): " + Chart.helpers.getMaximumWidth(ctx.canvas));
        console.log("width: " + ctx.canvas.width || parseInt(Chart.helpers.getStyle(ctx.canvas, 'width')) || Chart.helpers.getMaximumWidth(ctx.canvas));
        console.log("ctx.canvas.height: " + ctx.canvas.height);
        console.log("parseInt(Chart.helpers.getStyle(ctx.canvas, 'height')): " + parseInt(Chart.helpers.getStyle(ctx.canvas, 'height')));
        console.log("Chart.helpers.getMaximumHeight(ctx.canvas): " + Chart.helpers.getMaximumHeight(ctx.canvas));
        console.log("height: " + ctx.canvas.height || parseInt(Chart.helpers.getStyle(ctx.canvas, 'height')) || Chart.helpers.getMaximumHeight(ctx.canvas));
        console.log("window.devicePixelRatio: " + window.devicePixelRatio);
        console.log("-----");
*/

//      this.el.myChart = myChart;
//      console.dir(myChart);

//      resizeDetector.listenTo(this.el, function(element) {
  //      console.dir(canvas);
    //    canvas.width = element.clientWidth;
      //  canvas.height = element.clientHeight - 5;


  //    console.log("custom resize callback");
//          ctx.scale(1, 1);
  //      console.log("resize");
//      chart.chart.width = element.clientWidth;
  //    chart.chart.height = element.clientHeight;

//        console.log("offsetWidth: " + element.offsetWidth);
  //      console.log("offsetHeight: " + element.offsetHeight);

//      myChart.width = 10;
//        myChart.resize();
    //  });

//        this.value_changed();
//        this.model.on('change:value', this.value_changed, this);
    //    this.listenTo(this.model, "change:layout", this.layout_changed, this);
//        this.model.on('change:layout', this.layout_changed, this);
    },

//    layout_changed: function() {
  //    console.log("layout_changed");
    //  this.el.myChart.resize();
    //},

//    value_changed: function() {
  //      this.el.myChart.resize();
    //    this.el.textContent = this.model.get('value');
//    }
});


module.exports = {
    HelloModel : HelloModel,
    HelloView : HelloView
};


/*

        console.log("after Chart");
        console.log("-----");
        console.log("ctx.canvas.width: " + ctx.canvas.width);
        console.log("parseInt(Chart.helpers.getStyle(ctx.canvas, 'width')): " + parseInt(Chart.helpers.getStyle(ctx.canvas, 'width')));
        console.log("Chart.helpers.getMaximumWidth(ctx.canvas): " + Chart.helpers.getMaximumWidth(ctx.canvas));
        console.log("width: " + ctx.canvas.width || parseInt(Chart.helpers.getStyle(ctx.canvas, 'width')) || Chart.helpers.getMaximumWidth(ctx.canvas));
        console.log("ctx.canvas.height: " + ctx.canvas.height);
        console.log("parseInt(Chart.helpers.getStyle(ctx.canvas, 'height')): " + parseInt(Chart.helpers.getStyle(ctx.canvas, 'height')));
        console.log("Chart.helpers.getMaximumHeight(ctx.canvas): " + Chart.helpers.getMaximumHeight(ctx.canvas));
        console.log("height: " + ctx.canvas.height || parseInt(Chart.helpers.getStyle(ctx.canvas, 'height')) || Chart.helpers.getMaximumHeight(ctx.canvas));
        console.log("window.devicePixelRatio: " + window.devicePixelRatio);
        console.log("-----");
*/
