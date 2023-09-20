- [Learn javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Java scriptoverview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview)
```JSX
import React from 'react';
import {Text, View} from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉</Text>
    </View>
  );
};

export default YourApp;
```
# View
`view` is the basic building block of UI: a small rectangular element on the screen which can be used to display text, images, or respond to user input. Even the smallest visual elements of an app, like a line of text or a button, are kinds of views. Some kinds of views can contain other views. It’s views all the way down!

| REACT NATIVE UI COMPONENT	 | ANDROID VIEW | IOS VIEW|WEB ANALOG|DESCRIPTION|
| --------- | --------- | --------- |---------|---------|
| `<View>`| `<ViewGroup>` | `<UIView>` |`A non-scrolling <div>`| 	A container that supports layout with flexbox, style, some touch handling, and accessibility controls |
| `<Text>` | `<TextView>` | `<UITextView>` | `<p>	`|Displays, styles, and nests strings of text and even handles touch events |
|`<Image>`|`<ImageView>`|`<UIImageView>`|`<img>`|Displays different types of images|
|`<ScrollView>`| `<ScrollView>`|`<UIScrollView>`|`<div>`|A generic scrolling container that can contain multiple components and views|
|`<TextInput>`|`<EditText>`	|`<UITextField>`|`<input type="text">`|Allows the user to enter text
# JAva Script
Any `JavaScript` expression will work between curly braces, including function calls like {getFullName("Rum", "Tum", "Tugger")}:


# HTML inScript
```html
 const name = 'Maru';
return <Text>Hello, I am {name}!</Text>;
```

```r
<View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
```
# Porps
- **Props** is short for “properties”. Props let you customize React components. For example, here you pass each <Cat> a different name for Cat to render:

```JSX
const Cat = props => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
};
```


# State
- While you can think of props as arguments you use to configure how components render, state is like a component’s personal data storage. State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!

## Hooks
- A **Hook** is a kind of function that lets you “hook into” React features. For example, `useState` is a Hook that lets you add state to function components. 


# Handling Text Input
- `TextInput` is a Core Component that allows the user to enter text. It has an `onChangeText` `prop `that takes a function to be called every time the text changed, and an `onSubmitEditing` prop that takes a function to be called when the text is submitted.


```JSX
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;
```

# Using a ScrollView
- The `ScrollView` is a generic scrolling container that can contain multiple components and views. The scrollable items can be heterogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).

- This example creates a vertical ScrollView with both images and text mixed together.
```JSX
import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>
  </ScrollView>
);

export default App;
```
# USing list views
## Flatlist
- The FlatList component displays a scrolling list of changing, but similarly structured, data. FlatList works well for long lists of data, where the number of items might change over time

```JSX
<FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
```
## There is a SectionList

- If you want to render a set of data broken into logical sections, maybe with section headers, similar to UITableViews on iOS, then a SectionList is the way to go.

# Trouble Shot
## Terminating a process on port 8081
- Run the following command to find the id for the process that is listening on port 8081:

`sudo lsof -i :8081`
Then run the following to terminate the process:
`kill -9 <PID>`

`npm start -- --port=8088`
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules

[Fixing error](https://reactnative.dev/docs/troubleshooting)

# Platform
When building a cross-platform app, you'll want to re-use as much code as

`React Native` provides two ways to organize your code and separate it by platform

Using the `Platform module`.
Using `platform-specific` file extensions.
There is also a `Platform.select `method available, that given an object where keys can be one of `'ios' | 'android' | 'native' | 'default'`
```JSX
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});
```
```JSX
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});
  ```


  # Running
  ```
  npx create-expo-app AwesomeProject
  cd AwesomeProject
  npx expo start
  ```
`Running` your React Native application
Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.

## adnroid Or IOS
Once you've set these up, you can launch your app on an Android Virtual Device by running `npm run android`, or on the iOS Simulator by running `npm run ios` (macOS only).
# Communites
[discord react native](https://reactnative.dev/community/communities)


