import {Tabs} from 'expo-router';
import React from 'react';

import {Info} from '@gaio/ui/lib/icons/Info';
import {PanelLeft} from '@gaio/ui/lib/icons/PanelLeft';
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => {
            console.log('color ico2n: ', color);
            return <PanelLeft size={28} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({color}) => <Info size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
