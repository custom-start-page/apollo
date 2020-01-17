import React from 'react';
import Data from './Data';
import {
  StyleSheet,
  Text,
  View,
  VrButton,
  NativeModules,
} from 'react-360';

const data = new Data();

export default class Links extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    links: []
  }
  componentDidMount = () => {
    data.get()
      .then(data => {
        this.setState(() => ({
          links: data.links,
        }));
      });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.links.map((link, i) =>
          <Panel link={link} key={i} />
        )}
      </View>
    );
  }
};

class Panel extends View {
  constructor(props) {
    super(props);

    this.link = props.link;
  }
  state = {
    styles: {
      topLeft: {
        opacity: 0,
        position: 'absolute',
        width: 20,
        height: 20,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderColor: 'black',
      },
      topRight: {
        opacity: 0,
        position: 'absolute',
        right: 0,
        width: 20,
        height: 20,
        borderRightWidth: 3,
        borderTopWidth: 3,
        borderColor: 'black',
      },
      bottomLeft: {
        opacity: 0,
        position: 'absolute',
        bottom: 0,
        width: 20,
        height: 20,
        borderLeftWidth: 3,
        borderBottomWidth: 3,
        borderColor: 'black',
      },
      bottomRight: {
        opacity: 0,
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 20,
        height: 20,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderColor: 'black',
      },
      panelContainer: {
        width: 200,
        height: 100,
        padding: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: null,
      }
    }
  }
  onEnter = () => {
    this.setState(() => ({
      styles: {
        ...this.state.styles,
        topLeft: {
          ...this.state.styles.topLeft,
          opacity: 1,
        },
        topRight: {
          ...this.state.styles.topRight,
          opacity: 1,
        },
        bottomLeft: {
          ...this.state.styles.bottomLeft,
          opacity: 1,
        },
        bottomRight: {
          ...this.state.styles.bottomRight,
          opacity: 1,
        },
        // panelContainer: {
        //   ...this.state.styles.panelContainer,
        //   backgroundColor: 'rgba(0, 0, 0, 0.9)'
        // }
      }
    }));
  }
  onExit = () => {
    this.setState(() => ({
      styles: {
        ...this.state.styles,
        topLeft: {
          ...this.state.styles.topLeft,
          opacity: 0,
        },
        topRight: {
          ...this.state.styles.topRight,
          opacity: 0,
        },
        bottomLeft: {
          ...this.state.styles.bottomLeft,
          opacity: 0,
        },
        bottomRight: {
          ...this.state.styles.bottomRight,
          opacity: 0,
        },
        // panelContainer: {
        //   ...this.state.styles.panelContainer,
        //   backgroundColor: null
        // }
      }
    }));
  }
  render() {
    return (
      <View style={this.state.styles.panelContainer} onEnter={this.onEnter} onExit={this.onExit}>
        <View style={this.state.styles.topLeft} />
        <View style={this.state.styles.topRight} />
        <View style={this.state.styles.bottomLeft} />
        <View style={this.state.styles.bottomRight} />
        <View style={styles.panel}>
            <Link name={this.link.name} url={this.link.url} />
        </View>
      </View>
    )
  }
}

class Link extends View {
  constructor(props) {
    super(props);

    this.name = props.name;
    this.url = props.url;
  }
  name = null
  url = null
  redirect = () => {
    NativeModules.LinkingManager.openURL(this.url);
  }
  render() {
    return (
      <VrButton onClick={this.redirect}  style={styles.button}>
        <Text style={styles.panelText}>
          {this.name}
        </Text>
      </VrButton>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 4680,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  panel: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  button: {
  },
  panelText: {
    fontSize: 30,
    textAlign: 'center'
  },
});
