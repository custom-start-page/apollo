import {Module} from 'react-360-web';

// This is the way to expose the window to React:
// https://facebook.github.io/react-360/docs/example-native-modules.html
// Needed so the data loader can run outside of outside of the React app
// (so it is not compiled).
export default class DataModule extends Module {
    constructor(ctx) {
        super('Data');

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
