import {
  IDENT,
  WORD,
  COLOR,
  LENGTH,
  UNSUPPORTED_LENGTH_UNIT,
  PERCENT,
  AUTO,
} from '../tokenTypes.js'
import border from './border.js'
import boxShadow from './boxShadow.js'
import flex from './flex.js'
import flexFlow from './flexFlow.js'
import font from './font.js'
import fontFamily from './fontFamily.js'
import placeContent from './placeContent.js'
import textDecoration from './textDecoration.js'
import textDecorationLine from './textDecorationLine.js'
import textShadow from './textShadow.js'
import transform from './transform.js'
import { directionFactory, parseShadowOffset } from './util.js'

const background = tokenStream => ({
  backgroundColor: tokenStream.expect(COLOR),
})
const borderColor = directionFactory({
  types: [COLOR],
  prefix: 'border',
  suffix: 'Color',
})
const borderRadius = directionFactory({
  directions: ['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft'],
  prefix: 'border',
  suffix: 'Radius',
})
const borderWidth = directionFactory({ prefix: 'border', suffix: 'Width' })
const margin = directionFactory({
  types: [LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT, AUTO],
  prefix: 'margin',
})
const padding = directionFactory({ prefix: 'padding' })
const fontVariant = tokenStream => ({
  fontVariant: [tokenStream.expect(IDENT)],
})
const fontWeight = tokenStream => ({
  fontWeight: tokenStream.expect(WORD), // Also match numbers as strings
})
const shadowOffset = tokenStream => ({
  shadowOffset: parseShadowOffset(tokenStream),
})
const textShadowOffset = tokenStream => ({
  textShadowOffset: parseShadowOffset(tokenStream),
})

export default {
  background,
  border,
  borderColor,
  borderRadius,
  borderWidth,
  boxShadow,
  flex,
  flexFlow,
  font,
  fontFamily,
  fontVariant,
  fontWeight,
  margin,
  padding,
  placeContent,
  shadowOffset,
  textShadow,
  textShadowOffset,
  textDecoration,
  textDecorationLine,
  transform,
}
