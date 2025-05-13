import EtudeDecorative from './services/EtudeDecorative';
import HomeStagingVirtuel from './services/HomeStagingVirtuel';
import VisiteConseils from './services/VisiteConseils';
import Visualisation3D from './services/Visualisation3D';

export const SERVICES = [VisiteConseils, Visualisation3D, HomeStagingVirtuel, EtudeDecorative];
export const SERVICES_TITLES = Object.fromEntries(SERVICES.map(({ id, title }) => [id, title]));
export const SERVICES_TITLES_RAW = Object.fromEntries(SERVICES.map(({ id, titleRaw }) => [id, titleRaw]));
