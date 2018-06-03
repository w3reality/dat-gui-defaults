//import DatGuiDefaults from '../../../lib/dat-gui-defaults'; // for dev
import DatGuiDefaults from '../../../dist/dat-gui-defaults';

import * as THREE from 'three';

const canvas = document.getElementById("canvas");
const camera = new THREE.PerspectiveCamera( 75, canvas.width/canvas.height, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas: canvas});
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
const scene = new THREE.Scene();
scene.add( cube );

// begin -------- how to use DatGuiDefaults
class DemoGui extends DatGuiDefaults {
    // override
    initGui(gui, data, params) {
        let config = data;
        let controller;
        controller = gui.addColor(params, 'color').name('Color');
        controller.onChange((value) => { // or onFinishChange
            config.color = value;
        });
        controller = gui.add(params, 'wireframe').name('Wireframe');
        controller.onChange((value) => {
            config.wireframe = value;
        });
        controller = gui.add(params, 'reset').name("Restore Defaults");
        controller.onChange((value) => {
            this.applyDefaults();
            Object.assign(config, params);
        });
    }
}
const config = { // defaults
    color: "0xff0000",
    wireframe: true,
};
const dg = new DemoGui(config);
dg.setDefaults({
    color: config.color.replace("0x", "#"),
    wireframe: config.wireframe,
    reset: () => {},
});
// end -------- how to use DatGuiDefaults

camera.position.z = 2;
let render = () => {
    const t = performance.now() / 1000.;
    cube.rotation.x = Math.PI/2 * t;
    cube.material.color.setHex(config.color.replace("#", "0x"));
    cube.material.wireframe = config.wireframe;
    renderer.render(scene, camera);
};
let animate = () => {
    requestAnimationFrame(animate);
    render();
};
animate();
