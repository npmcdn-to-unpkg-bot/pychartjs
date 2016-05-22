pychartjs
===============================

Wrapping of Chart.js in Python

Installation
------------

To install use pip:

    $ pip install pychartjs
    $ jupyter nbextension enable --py --sys-prefix pychartjs


For a development installation (requires npm),

    $ git clone https://github.com/jupyter/pychartjs.git
    $ cd pychartjs
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --user pychartjs
    $ jupyter nbextension enable --py --user pychartjs
