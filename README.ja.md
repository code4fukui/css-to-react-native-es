# css-to-react-native-es

CSSテキストをReact Nativeのスタイルシートオブジェクトに変換します。

## 機能

- CSSのプロパティ名をkebab-caseからcamelCaseに変換します（例: `background-color` から `backgroundColor`）。
- 数値のピクセル（`px`）値を数値に変換し、他の単位（例: `%`、`em`、`deg`）は文字列として保持します。
- `margin`、`padding`、`font`、`border`などのCSSショートハンドプロパティを、対応するReact Nativeのロングハンドプロパティに展開します。
- `transform`、`text-shadow`、`box-shadow`などのプロパティの複雑な値を解析します。
- 幅広いCSSのカラーフォーマット、キーワード、値をサポートします。

## 使い方

主要なエクスポートは `transform` 関数です。この関数は `[プロパティ, 値]` のタプルの配列を受け取り、React Nativeのスタイルオブジェクトを返します。

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

このライブラリは3つの主要な関数をエクスポートします。

### `transform(styleTuples, [shorthandBlacklist])`

CSSルールの配列をスタイルオブジェクトに変換するメイン関数です。

- `styleTuples: Array<[string, string]>`: プロパティと値のペアの配列。
- `shorthandBlacklist?: string[]`: ショートハンドの展開を無効にするcamelCaseのプロパティ名の配列（オプション）。

```js
// Disable shorthand expansion for 'borderRadius'
const styles = transform(
  [['border-radius', '50px']],
  ['borderRadius']
);
// => { borderRadius: 50 }
```

### `getStylesForProperty(name, value, [allowShorthand])`

単一のCSSプロパティと値を変換します。より細かい制御に役立ちます。

- `name: string`: camelCaseのプロパティ名。
- `value: string`: CSSの値の文字列。
- `allowShorthand?: boolean`: ショートハンドの展開を無効にする場合は `false` を設定します。デフォルトは `true` です。

```js
import { getStylesForProperty } from 'https://code4fukui.github.io/css-to-react-native-es/cssToReactNative.js'

const borderStyles = getStylesForProperty('borderWidth', '1px 0px 2px 0px');
// => { borderTopWidth: 1, borderRightWidth: 0, borderBottomWidth: 2, borderLeftWidth: 0 }
```

### `getPropertyName(name)`

CSSのプロパティ名をkebab-caseからcamelCaseに変換します。

- `name: string`: kebab-case形式のCSSプロパティ名。

```js
import { getPropertyName } from 'https://code4fukui.github.io/css-to-react-native-es/cssToReactNative.js'

const propName = getPropertyName('border-width');
// => 'borderWidth'
```

## サポートされているショートハンドプロパティ

- `background`
- `border`
- `borderColor`
- `borderRadius`
- `borderWidth`
- `boxShadow`
- `flex`
- `flexFlow`
- `font`
- `fontFamily`
- `fontVariant`
- `fontWeight`
- `margin`
- `padding`
- `placeContent`
- `shadowOffset`
- `textDecoration`
- `textDecorationLine`
- `textShadow`
- `textShadowOffset`
- `transform`

## ライセンス

MIT License — [LICENSE.md](./LICENSE.md) を参照してください。
