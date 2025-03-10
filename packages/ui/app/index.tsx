import * as React from 'react';
import {ScrollView, View} from 'react-native';
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from 'react-native-reanimated';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@gaio/ui/components/ui/avatar';
import {Button} from '@gaio/ui/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@gaio/ui/components/ui/card';
import {Progress} from '@gaio/ui/components/ui/progress';
import {Text} from '@gaio/ui/components/ui/text';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@gaio/ui/components/ui/tooltip';
import {Info} from '@gaio/ui/lib/icons/Info';
import {toast} from '@gaio/ui/components/custom/sonner';
import Editor from '@gaio/ui/components/custom/RichTextEditor/richtext';
import {useState} from 'react';

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function Screen() {
  const [progress, setProgress] = useState(78);

  const [editorState, setEditorState] = useState<string | null>(null);
  const [plainText, setPlainText] = useState('');
  const wordCount = editorState?.split(' ').length ?? 0;

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <ScrollView>
      <View className="items-center justify-center flex-1 gap-5 p-6 bg-secondary/30">
        <Card className="w-full max-w-sm p-6 rounded-2xl">
          <CardHeader className="items-center">
            <Avatar alt="Rick Sanchez's Avatar" className="w-24 h-24">
              <AvatarImage source={{uri: GITHUB_AVATAR_URI}} />
              <AvatarFallback>
                <Text>RS</Text>
              </AvatarFallback>
            </Avatar>
            <View className="p-3" />
            <CardTitle className="pb-2 text-center">Rick Sanchez</CardTitle>
            <View className="flex-row">
              <CardDescription className="text-base font-semibold">
                Scientist
              </CardDescription>
              <Tooltip delayDuration={150}>
                <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
                  <Info
                    size={14}
                    strokeWidth={2.5}
                    className="w-4 h-4 text-foreground/70"
                  />
                </TooltipTrigger>
                <TooltipContent className="px-4 py-2 shadow">
                  <Text className="native:text-lg">Freelance</Text>
                </TooltipContent>
              </Tooltip>
            </View>
          </CardHeader>
          <CardContent>
            <View className="flex-row justify-around gap-3">
              <View className="items-center">
                <Text className="text-sm text-muted-foreground">Dimension</Text>
                <Text className="text-xl font-semibold">C-137</Text>
              </View>
              <View className="items-center">
                <Text className="text-sm text-muted-foreground">Age</Text>
                <Text className="text-xl font-semibold">70</Text>
              </View>
              <View className="items-center">
                <Text className="text-sm text-muted-foreground">Species</Text>
                <Text className="text-xl font-semibold">Human</Text>
              </View>
            </View>
          </CardContent>
          <CardFooter className="flex-col gap-3 pb-0">
            <View className="flex-row items-center overflow-hidden">
              <Text className="text-sm text-muted-foreground">
                Productivity:
              </Text>
              <LayoutAnimationConfig skipEntering>
                <Animated.View
                  key={progress}
                  entering={FadeInUp}
                  exiting={FadeOutDown}
                  className="items-center w-11">
                  <Text className="text-sm font-bold text-secondary-foreground">
                    {progress}%
                  </Text>
                </Animated.View>
              </LayoutAnimationConfig>
            </View>
            <Progress
              value={progress}
              className="h-2"
              indicatorClassName="bg-secondary-foreground"
            />
            <View />
            <Button
              variant="default"
              className="shadow shadow-foreground/5"
              onPress={updateProgressValue}>
              <Text>Update</Text>
            </Button>
          </CardFooter>
        </Card>
        <Text style={{fontSize: 16, marginVertical: 10}}>{plainText}</Text>
        <Text style={{fontSize: 16}}>Words: {wordCount}</Text>
        <Text style={{fontSize: 16}}>EditorState: {editorState}</Text>
        <View className="w-full h-80">
          <Editor setPlainText={setPlainText} setEditorState={setEditorState} />
        </View>
        <Button
          variant="default"
          onPress={() => {
            toast('hello toaster');
          }}>
          <Text>Toast</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
