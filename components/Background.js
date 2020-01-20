import {
  AppRegistry,
  Environment,
} from 'react-360';

import Data from './Data';

const data = new Data();

data.get()
    .then(data => {
        Environment.setBackgroundImage(data.backgroundImage, {
            rotateTransform: [{rotateY: '60deg'}]
        });
    });

AppRegistry.registerComponent('Background', () => Background);
