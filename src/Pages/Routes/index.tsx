import { Route, Switch } from 'react-router-dom';
import Home from '../Home';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
		</Switch>
	);
}
