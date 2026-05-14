# css-to-react-native-es

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Converts CSS text to a React Native stylesheet object.

## Features

-   Converts CSS property names from kebab-case to camelCase (e.g., `background-color` to `backgroundColor`).
-   Converts numeric pixel (`px`) values to numbers, while preserving other units (e.g., `%`, `em`, `deg`) as strings.
-   Expands CSS shorthand properties like `margin`, `padding`, `font`, and `border` into their longhand React Native equivalents.
-   Parses complex values for properties like `transform`, `text-shadow`, and `box-shadow`.
-   Supports a wide range of CSS color formats, keywords, and values.

## Usage

The primary export is the `transform` function, which takes an array of `[property, value]` tuples and returns a React Native style object.

```js
import { transform } from 'https://code4fukui.github.io/css-to-react-native-es/cssToReactNative.js'

const styles = transform([
  ['font', 'bold 14px/16px "Helvetica"'],
  ['margin', '5px 7px 2px'],
  ['border-left-width', '5px'],
]);

/*
styles is now:
{
  fontFamily: 'Helvetica',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontVariant: [],
  lineHeight: 16,
  marginTop: 5,
  marginRight: 7,
  marginBottom: 2,
  marginLeft: 7,
  borderLeftWidth: 5
}
*/
```

## API

This library exports three main functions.

### `transform(styleTuples, [shorthandBlacklist])`

The main function that converts an array of CSS rules into a style object.

-   `styleTuples: Array<[string, string]>`: An array of property-value pairs.
-   `shorthandBlacklist?: string[]`: An optional array of camelCased properties to disable shorthand expansion for.

```js
// Disable shorthand expansion for 'borderRadius'
const styles = transform(
  [['border-radius', '50px']],
  ['borderRadius']
);
// => { borderRadius: 50 }
```

### `getStylesForProperty(name, value, [allowShorthand])`

Converts a single CSS property and value. Useful for more granular control.

-   `name: string`: The camelCased property name.
-   `value: string`: The CSS value string.
-   `allowShorthand?: boolean`: Set to `false` to disable shorthand expansion. Defaults to `true`.

```js
import { getStylesForProperty } from 'https://code4fukui.github.io/css-to-react-native-es/cssToReactNative.js'

const borderStyles = getStylesForProperty('borderWidth', '1px 0px 2px 0px');
// => { borderTopWidth: 1, borderRightWidth: 0, borderBottomWidth: 2, borderLeftWidth: 0 }
```

### `getPropertyName(name)`

Converts a CSS property name from kebab-case to camelCase.

-   `name: string`: The kebab-cased CSS property name.

```js
import { getPropertyName } from 'https://code4fukui.github.io/css-to-react-native-es/cssToReactNative.js'

const propName = getPropertyName('border-width');
// => 'borderWidth'
```

## Supported Shorthand Properties

-   `background`
-   `border`
-   `borderColor`
-   `borderRadius`
-   `borderWidth`
-   `boxShadow`
-   `flex`
-   `flexFlow`
-   `font`
-   `fontFamily`
-   `fontVariant`
-   `fontWeight`
-   `margin`
-   `padding`
-   `placeContent`
-   `shadowOffset`
-   `textDecoration`
-   `textDecorationLine`
-   `textShadow`
-   `textShadowOffset`
-   `transform`

## License

MIT License — see [LICENSE.md](./LICENSE.md).