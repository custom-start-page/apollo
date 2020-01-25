import {
  AppRegistry,
  Environment,
  NativeModules,
} from 'react-360';

const {Browser} = NativeModules;

Browser.get()
    .then(data => {
        console.log(data);

        Environment.setBackgroundImage(data.backgroundImage, {
            rotateTransform: [{rotateY: '60deg'}]
        });
    })
    .catch(() => {
        console.error('That\'s an error...');
    });

AppRegistry.registerComponent('Background', () => Background);
