- [Learn javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Java scriptoverview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview)
```r
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


# Props

```html
type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
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
  );}
```