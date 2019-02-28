import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Icon, Dropdown, Input } from 'semantic-ui-react';

import logo from './images/bwod-tori_logo.jpg';
import topLeft from './images/bwod-10268.jpg';
import topCenter from './images/bwod-10534.jpg';
import topRight from './images/bwod-10098.jpg';
import bottomLeft from './images/bwod-10535.jpg';
import bottomCenter from './images/bwod-8883.jpg';
import bottomRight from './images/bwod-2777.jpg';
import joinOurOhana from './images/bwod-join-our-ohana-icon.png';

class ToriRichard extends React.Component {
  render() {
    return (
        <div>
          <Logo></Logo>
          <TopMenu></TopMenu>
        </div>
  );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <Image src={logo} />
    );
  }
}
class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item> MENS </Menu.Item>
            <Menu.Item> WOMEN </Menu.Item>
            <Menu.Item> ABOUT </Menu.Item>
            <Menu.Item> STORES </Menu.Item>
            <Menu.Item position="right"> Register </Menu.Item>
            <Menu.Item> Log in </Menu.Item>
            <Menu.Item> Shopping Bag <Icon name="shopping bag" /></Menu.Item>
            <Input placeholder='search...' icon='search' />
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}


ReactDOM.render(<ToriRichard/>, document.getElementById('root'));
