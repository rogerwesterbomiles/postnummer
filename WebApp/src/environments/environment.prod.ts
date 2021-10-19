declare let require: any;
declare let window: any;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version: appVersion } = require('../../package.json');

export const environment = {
  appVersion,
  backend: {
    uri: window['env']['BACKEND_URL'] || '',
  },
  production: true,
};
