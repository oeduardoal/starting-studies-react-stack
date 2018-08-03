import { StackNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';

const Routes = StackNavigator({
  Welcome: { screen: Welcome },
});

export default Routes;
