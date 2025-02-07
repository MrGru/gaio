import {View, Text} from 'react-native';

import {Label} from '@gaio/ui/components/ui/label';
import {Button} from '@gaio/ui/components/ui/button';

export default function HomeScreen() {
  return (
    <View className="bg-accent">
      <Text className="text-red-200">Duan 01</Text>
      <Label className="text-accent">Duan</Label>
      <Button variant="outline">
        <Label>Duan 02</Label>
      </Button>
    </View>
  );
}
