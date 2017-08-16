import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

// New Imports
import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';
import BlueScreen from './BlueScreen';
import MaizeScreen from './MaizeScreen';
import GoldScreen from './GoldScreen';
import BlackScreen from './BlackScreen';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root" >
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }
        }
        >
          <Scene key="osu" title="OSU" icon={()=>(<Icon name='opacity'/>)}>
            <Scene key="scarlet"
              component={ScarletScreen}
              title={"Scarlet"}
                hideNavBar={true}
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
                hideNavBar={true}
            />
          </Scene>
          <Scene key="um" title="Home" icon={()=>(<Icon
      name='home' />)}>
            <Scene
              key="blue"
              component={BlueScreen}
              title="Blue"
                hideNavBar={true}
            />
            <Scene
              key="maize"
              component={MaizeScreen}
              title="Maize"
                hideNavBar={true}
            />
          </Scene>

          <Scene key="vu" title="SALE" icon={()=>(<Icon
      name='shopping-cart' />)} >
            <Scene
              key="gold"
              component={GoldScreen}
              title="Gold"
                hideNavBar={true}
            />
            <Scene
              key="black"
              component={BlackScreen}
              title="Black"

            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default App;
