const rgbToHex = (r, g, b) => {
  const hex = ((r << 16) | (g << 8) | b).toString(16);
  return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex;
};

const LIGHT_GRAY = rgbToHex(243, 243, 245);
const DARK_WHITE = rgbToHex(230, 230, 230);
const WHITE = '#ffffff';
const BLACK = '#000000';

export const COLORS = {
  app: WHITE,
  particles: BLACK,
  canvas: WHITE,
  table: WHITE,
  info: LIGHT_GRAY,
  header: WHITE,
  main: DARK_WHITE,
  title: LIGHT_GRAY,
  buttonDisabled: 'gray.800',
  error: 'red.300',
  success: 'green.300'
};

export const FIRST_API_CALL_TIMEOUT = 10_000;
export const SECOND_API_CALL_TIMEOUT = 20_000;
export const PROCESSING_TIMEOUT = 10_000;

export const CONSTANTS = {
  CLOUD_FORMATION_DEPLOY: 'aws',
  DOCKER_DEPLOY: 'local',
  DOWNLOAD_FILES: 10002,
  WINDOWS: 10003,
  MAC: 10004,
  LINUX: 10005,
  boxShadowLight: '0px 0px 2px 0px rgba(0,0,0,0.2)',
  boxShadowSolid: '0px 0px 1px 0px rgba(0,0,0,0.7)',
  RUNNING: 'running',
  STOPPED: 'stopped',
  STARTING: 'starting',
  STOPPING: 'stopping',
  RESTARTING: 'restarting',
  REMOVING: 'removing',
  PAUSED: 'paused',
  EXITED: 'exited',
  DEAD: 'dead'
};

export const COLORS2 = {
  app: '#fffefe',
  appDarker: '#F9F2DC',
  bg: '#E7DFC6',
  table: '#fffffa',
  info: '#F9F2DC',
  info2: '#FDF9ED',
  header: '#FFFBEF',
  main: '#f4f4e7',
  button: '#FFF4CC',
  buttonDisabled: 'gray.800',
  error: 'red.300',
  success: 'green.300'
};
