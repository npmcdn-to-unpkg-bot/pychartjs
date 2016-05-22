import ipywidgets as widgets
from traitlets import Unicode


class HelloWorld(widgets.DOMWidget):
    """"""
    _view_name = Unicode('HelloView').tag(sync=True)
    _model_name = Unicode('HelloModel').tag(sync=True)
    _view_module = Unicode('pychartjs').tag(sync=True)
    _model_module = Unicode('pychartjs').tag(sync=True)
    value = Unicode('Hello World!').tag(sync=True)

#    def on_displayed(self):
#        print 'displayed'
