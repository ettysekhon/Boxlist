const config = {
  spacing: {
    baseFontSize: 16,
    baseLineHeightRatio: 1.25
  }
};

const fontSize = config.spacing.baseFontSize;
const lineHeightRatio = config.spacing.baseLineHeightRatio;
const lineHeight = fontSize * lineHeightRatio;

const spacing = {
  'spacing-xxxxs': lineHeight * 0.125,
  'spacing-xxxs': lineHeight * 0.25,
  'spacing-xxs': lineHeight * 0.5,
  'spacing-xs': lineHeight * 0.75,
  'spacing-s': lineHeight * 0.875,
  'spacing-m': lineHeight,
  'spacing-l': lineHeight * 1.125,
  'spacing-xl': lineHeight * 1.25,
  'spacing-xxl': lineHeight * 1.5,
  'spacing-xxxl': lineHeight * 2,
  'spacing-xxxxl': lineHeight * 4
};

export default spacing;
