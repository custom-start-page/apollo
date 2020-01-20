# Apollo Start

A startpage with a 3D twist. See your links on the moon!

![.gif showing the apollo startpage](github/moon.gif)

## Features

- customisable links
- customisable background
- 3D!

## Using

- [React 360](https://facebook.github.io/react-360/)
- Apollo 11 image (credit to Serendigity - https://www.flickr.com/photos/68686051@N00/48269069057)

## How to customise

Edit the `/static_assets/data.json` file with your links and a background image of your choosing.

## Finding the right background image

The background iamge should be an "equirectangular image". I found the Apollo image here: http://photopin.com/free-photos/equirectangular.

## Building

- run `npm install` (tested with NPM v5.6.0 and Node v8.11.1)
- run `npm run bundle`
- copy the `static_assets` folder into the new `build` folder
- run a webserver in the `build` folder (I recommend [http-server](https://www.npmjs.com/package/http-server) if you want to take a look locally)
