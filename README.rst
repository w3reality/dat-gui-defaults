dat-gui-defaults
===================

(draft)

Setup
-----

**Install**

.. code::
   
   $ npm install dat-gui-defaults

**Loading**

Using Script tags:

.. code::

   <script src="dist/dat-gui-defaults.min.js"></script>

Using the ES6 module system:
   
.. code::

   import DatGuiDefaults from 'dat-gui-defaults'
   
For more details on loading (e.g. AMD, Node.js), refer to `es6-umd-module-howto`_.

.. _es6-umd-module-howto: https://github.com/w3reality/es6-umd-module-howto

Usage
-----

!!!override initGui()

.. code::

   class DemoGui extends DatGuiDefaults {
       // override
       initGui(gui, data, params) {
           //...
       }
   }

.. code::

   var demoGui = new DemoGui(...);

Live Demos
--------------

https://w3reality.github.io/dat-gui-defaults/examples/demo-script-tag/index.html

https://w3reality.github.io/dat-gui-defaults/examples/demo-es6/dist/index.html


Build
-----

.. code::

   $ npm install  # set up build tools
   $ npm run build  # generate module files in lib/
