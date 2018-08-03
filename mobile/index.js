import 'config/Reactron';
import { AppRegistry } from 'react-native';
import Routes from 'routes.js';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
