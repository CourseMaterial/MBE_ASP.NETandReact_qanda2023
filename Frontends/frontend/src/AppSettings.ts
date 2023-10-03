export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda2021-webdeploy-terminal.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda2021-webdeploy-staging-terminal.azurewebsites.net'
    : 'https://qanda2021-webdeploy-terminal.azurewebsites.net';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: '{{DOMAIN}}',
  clientId: '{{CLIENT_ID}}}',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: '{{AUDIENCE}}',
};
