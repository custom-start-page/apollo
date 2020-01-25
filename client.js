// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from 'react-360-web';

import DataModule from './components/DataModule';

function init(bundle, parent, options = {}) {
    r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        nativeModules: [
            ctx => new DataModule(ctx),
        ],
        ...options,
    });

    // Max 4680
    const container = new Surface(4680, 200, Surface.SurfaceShape.Cylinder);

    r360.renderToSurface(
        r360.createRoot('Links', { /* initial props */ }),
        container
    );
}

window.React360 = {init};
