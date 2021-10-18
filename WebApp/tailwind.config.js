module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
        170: '42.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        3: '3px',
      },
      animation: {
        'search-dropdown': 'fade 1.5s linear forwards',
      },
      width: {
        228: '57rem',
      },
      maxWidth: {
        348: '87rem',
      },
      colors: {
        hdir: {
          white: '#FFFFFF',
          helptext: '#6e6e6e',

          'grey-1': '#c7c7c7',
          'grey-2': '#dedede',
          'grey-3': '#f3f4f6',
          'grey-4': '#212121',
          'grey-5': '#e5e5e5',
          'grey-6': '#525252',

          'blue-logo-1': '#025169',
          'blue-logo-2': '#047fa4',

          'blue-1': '#409cb9',
          'blue-2': '#82bfd2',
          'blue-3': '#b7d7e1',
          'blue-4': '#afe5f5',
          'blue-5': '#0057ff',
          'blue-6': '#effafd',

          'warn-red': '#ad1f23',
          'warn-green': '#0d7b3e',

          'purple-1': '#73486b',
          'purple-2': '#c38cb7',
          'purple-3': '#e5bdf6',

          'purple-background': '#f1ecf6',
          'purple-highlight': '#eadeed',

          'green-1': '#366558',
          'green-2': '#6aa99a',
          'green-3': '#95dbca',
          'green-4': '#62e9c9',
          'green-5': '#38d3ae',
          'green-6': '#36d8b1',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
