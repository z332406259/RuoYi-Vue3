import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
  theme: {
    colors: {
      primary: '#FC6666',
      secondary: 'rgba(255, 102, 102, 0.85)',
      success: '#3DD293',
      danger: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      light: '#f8f9fa',
      dark: '#343a40',
      disabled: '#a0a0a0',
      blue: '#65a0f0',
      purple: '#B5A5EC',
      graye5: '#e5e5e5',
      black333: '#333',
      grayd7: '#d7d7d7',
      eyeblue:'#7688F6',
      gray085ba8:'#085ba8'
    }
  },
  rules: [
    // [/^line-height-(\d+)$/, (match) => ({ 'line-height': `${match[1]}px` })],
    // [/^rd-(\d+)$/, (match) => ({ 'border-radius': `${match[1]}px` })],
    // [/^m-(\d+)$/, (match) => ({ margin: `${match[1]}px` })],
    // [/^p-(\d+)$/, (match) => ({ padding: `${match[1]}px` })],
    // [/^mx-(\d+)$/, (match) => ({ 'margin-left': `${match[1]}px`,'margin-right': `${match[1]}px` })],
    // [/^px-(\d+)$/, (match) => ({ 'padding-left': `${match[1]}px`,'padding-right': `${match[1]}px` })],
    // [/^my-(\d+)$/, (match) => ({ 'margin-top': `${match[1]}px`,'margin-bottom': `${match[1]}px` })],
    // [/^py-(\d+)$/, (match) => ({ 'padding-top': `${match[1]}px`,'padding-bottom': `${match[1]}px` })],
    // [/^mt-(\d+)$/, (match) => ({ 'margin-top': `${match[1]}px` })],
    // [/^pt-(\d+)$/, (match) => ({ 'padding-top': `${match[1]}px` })],
    // [/^ml-(\d+)$/, (match) => ({ 'margin-left': `${match[1]}px` })],
    // [/^pl-(\d+)$/, (match) => ({ 'padding-left': `${match[1]}px` })],
    // [/^mb-(\d+)$/, (match) => ({ 'margin-bottom': `${match[1]}px` })],
    // [/^pb-(\d+)$/, (match) => ({ 'padding-bottom': `${match[1]}px` })],
    // [/^mr-(\d+)$/, (match) => ({ 'margin-right': `${match[1]}px` })],
    // [/^pr-(\d+)$/, (match) => ({ 'padding-right': `${match[1]}px` })],
    ['shadow-sm', { 'box-shadow': '0 3px 7px 0 rgba(166, 166, 166, 0.7)' }],
    ['shadow166', { 'box-shadow': '0 10px 9px 1px rgba(166, 166, 166, 0.2)' }],
    ['shadow-jj', { 'box-shadow': '0 6px 8px 0 rgba(166, 166, 166, 0.27)' }],
    ['shadow-jg', { 'box-shadow': '0 4px 10px 0 rgba(215, 215, 215, 0.86)' }],
    ['shadow', { 'box-shadow': '0 10px 9px 1px rgba(215, 215, 215, 0.35)' }],
    ['shadow-lg', { 'box-shadow': '6px 8px 19px 2px rgba(215, 215, 215, 0.7)' }],
    ['shadow-mg', { 'box-shadow': '0 7px 24px 0 rgba(215, 215, 215, 0.6)' }],
    ['shadow-gg', { 'box-shadow': '0 10px 17px 3px rgba(166, 166, 166, 0.2)' }],
    ['shadow-double', { 'box-shadow': '0px -10px 17px 3px rgba(166, 166, 166, 0.2),0px 10px 17px 3px rgba(166, 166, 166, 0.2)' }],
    ['shadow-match', { 'box-shadow': '3rpx 3rpx 30rpx 40rpx rgba(230, 0, 147, 0.1)' }],
    [/^flex-(\d+)$/, (match) => ({ 'flex': `${match[1]}` })],
    ['absolute-y-center', { 'position': 'absolute','top':'50%','transform':'translateY(-50%)' }],
    ['absolute-x-center', { 'position': 'absolute','left':'50%','transform':'translateX(-50%)' }],
    ['absolute-center', { 'position': 'absolute','top':'50%','left':'50%','transform':'translate(-50%,-50%)' }],
  ],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',
      'flex-col': 'flex flex-col',
      'absolute-fill': 'absolute top-0 left-0 right-0 bottom-0',
      round: 'rd-100%',
      'scroll-row': 'w-100% text-nowrap',
      'scroll-row-item': 'inline-block',
      mask:'left-0 right-0 h-70 line-height-70 px-25 rd-b-10px bg-white/60',
    },
    [/^b-(.*)-(.*)-(.*)$/, match => `b-${match[1]} b-${match[2]} b-${match[3]}`],
    [/^b-(.*)-(.*)-(.*)-(.*)$/, match => `b-${match[1]}-${match[2]} b-${match[1]}-${match[3]} b-${match[1]}-${match[4]}`],
  ]
})


