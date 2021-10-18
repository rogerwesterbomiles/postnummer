declare let require: any;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version: appVersion } = require('../../package.json');

export const environment = {
  appVersion,
  backend: {
    uri: 'http://localhost:9000',
  },
  production: true,
};
