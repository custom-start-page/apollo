import {Module} from 'react-360-web';

// This is the way to expose the window to React:
// https://facebook.github.io/react-360/docs/example-native-modules.html
export default class BrowserModule extends Module {
    constructor(ctx) {
        super('Browser');

        this._rnctx = ctx;
    }
    $get(resolve, reject) {
        window.Data.get()
            .then(data => {
                console.log('$get', data);

                this._rnctx.invokeCallback(resolve, [data]);
            });
    }
}
