declare let require: any;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version: appVersion } = require('../../package.json');

export const environment = {
  appVersion,
  backend: {
    uri: '$BACKEND_URI',
  },
  production: true,
};
