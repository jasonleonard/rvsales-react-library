import { configure } from '@storybook/react';
import './global.css'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);