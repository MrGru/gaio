import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pressable, View} from 'react-native';
import {setAndroidNavigationBar} from '@ui/lib/android-navigation-bar';
import {MoonStar} from '@ui/lib/icons/MoonStar';
import {Sun} from '@ui/lib/icons/Sun';
import {useColorScheme} from '@ui/lib/useColorScheme';
import {cn} from '@ui/lib/utils';

export function ThemeToggle() {
  const {isDarkColorScheme, setColorScheme} = useColorScheme();
  console.log('click items: ', isDarkColorScheme);
  return (
    <Pressable
      onPress={() => {
        console.log('Click here => ', isDarkColorScheme);
        const newTheme = isDarkColorScheme ? 'light' : 'dark';
        setColorScheme(newTheme);
        setAndroidNavigationBar(newTheme);
        AsyncStorage.setItem('theme', newTheme);
      }}
      className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2">
      {({pressed}) => (
        <View
          className={cn(
            'flex-1 aspect-square pt-0.5 justify-center items-start web:px-5',
            pressed && 'opacity-70',
          )}>
          {isDarkColorScheme ? (
            <MoonStar
              className="text-foreground"
              size={23}
              strokeWidth={1.25}
            />
          ) : (
            <Sun className="text-foreground" size={24} strokeWidth={1.25} />
          )}
        </View>
      )}
    </Pressable>
  );
}
