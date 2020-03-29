const path = require('path');
const fs = require('fs');

module.exports = {
    onBundle: (webpackConfig) => {
    },
    onVerify: (preloadJs, units) => {
        // Due to the `window` symbol in `dat.gui`, node-verify only these units
        units.node.push('umd-require', 'esm-compat-require');
    },
};
