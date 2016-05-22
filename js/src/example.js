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
      var canvas = document.createElement("canvas");
      this.el.appendChild(canvas);

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
            maintainAspectRatio: true,
            scales: {
              yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

      resizeDetector.listenTo(this.el, function(element) {
          console.log("resizing");
          console.dir(element);
//          var width = element.offsetWidth;
  //        var height = element.offsetHeight;
          console.log("offsetWidth: " + element.offsetWidth);
          console.log("offsetHeight: " + element.offsetHeight);

          myChart.resize();
      });

            resizeDetector.listenTo(canvas, function(element) {
                console.log("canvas resizing");
            });

        this.model.on('change:layout', this.change_layout, this);


//        this.model.on('change:visible', this.change_visible, this);

        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
    },

      change_layout: function() {
          console.log("layout_changed");

//            this.stopListening(this.model.previous("layout"));
//            this.listenTo(this.model.get("layout"), "change", this.relayout, this);
        },

    value_changed: function() {
    //    this.el.textContent = this.model.get('value');
    }
});


module.exports = {
    HelloModel : HelloModel,
    HelloView : HelloView
};
