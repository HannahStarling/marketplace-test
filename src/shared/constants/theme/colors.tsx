const root = document.documentElement;

// Определите значения по умолчанию для переменных CSS
const defaultColors = {
  accentPink: '#FF2D87',
  accentLightPink: '#FF7CB4',
  accentGreen: '#58CF18',
  accentBlue: '#2967FF',
  accentYellow: '#FFA601',
  secondaryWhite: '#FFFFFF',
  accentGrey: '#F0F4FB',
  secondaryGrey: '#8D8D8E',
  primaryBody: '#727280',
  primaryDark: '#2D2D2F',
};

// Получите значения из переменных CSS, если они доступны, иначе используйте значения по умолчанию
export const COLORS = {
  accentPink: getComputedStyle(root).getPropertyValue('--accent-pink').trim() || defaultColors.accentPink,
  accentLightPink: getComputedStyle(root).getPropertyValue('--accent-light-pink').trim() || defaultColors.accentLightPink,
  accentGreen: getComputedStyle(root).getPropertyValue('--accent-green').trim() || defaultColors.accentGreen,
  accentBlue: getComputedStyle(root).getPropertyValue('--accent-blue').trim() || defaultColors.accentBlue,
  accentYellow: getComputedStyle(root).getPropertyValue('--accent-yellow').trim() || defaultColors.accentYellow,
  secondaryWhite: getComputedStyle(root).getPropertyValue('--secondary-white').trim() || defaultColors.secondaryWhite,
  accentGrey: getComputedStyle(root).getPropertyValue('--accent-grey').trim() || defaultColors.accentGrey,
  secondaryGrey: getComputedStyle(root).getPropertyValue('--secondary-grey').trim() || defaultColors.secondaryGrey,
  primaryBody: getComputedStyle(root).getPropertyValue('--primary-body').trim() || defaultColors.primaryBody,
  primaryDark: getComputedStyle(root).getPropertyValue('--primary-dark').trim() || defaultColors.primaryDark,
};
