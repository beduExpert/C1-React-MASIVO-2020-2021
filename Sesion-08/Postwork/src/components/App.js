import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Seleccion from './Seleccion';

import S1E1 from './S1/E1/App';
import S1E2 from './S1/E2/App';
import S1R1 from './S1/R1/App';
import S1R2 from './S1/R2/App';
import S1Post from './S1/Post/App';

import S2E1 from './S2/E1/App';
import S2E2 from './S2/E2/App';
import S2R1 from './S2/R1/App';
import S2R2 from './S2/R2/App';
import S2Post from './S2/Post/App';

import S3E1 from './S3/E1/App';
import S3E2 from './S3/E2/App';
import S3R1 from './S3/R1/App';
import S3R2 from './S3/R2/App';

import S4E1 from './S4/E1/App';
import S4E2 from './S4/E2/App';
import S4E3 from './S4/E3/App';
import S4R1 from './S4/R1/App';
import S4R2 from './S4/R2/App';
import S4R3 from './S4/R3/App';

import S5E1 from './S5/E1/App';
import S5E2 from './S5/E2/App';
import S5R1 from './S5/R1/App';
import S5R2 from './S5/R2/App';
import S5Post from './S5/Post/App';

import S6E1 from './S6/E1/App';
import S6E2 from './S6/E2/App';
import S6R1 from './S6/R1/App';
import S6R2 from './S6/R2/App';

import S7E1 from './S7/E1/App';
import S7R1 from './S7/R1/App';

import S8E1 from './S8/E1/App';
import S8E2 from './S8/E2/App';
import S8R1 from './S8/R1/App';
import S8R2 from './S8/R2/App';
import S8Post from './S8/Post/App';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Container>
				<Seleccion />

				<Route exact path="/" component={S1E1} />
				<Route exact path="/s1e1" component={S1E1} />
				<Route exact path="/s1e2" component={S1E2} />
				<Route exact path="/s1r1" component={S1R1} />
				<Route exact path="/s1r2" component={S1R2} />
				<Route exact path="/s1post" component={S1Post} />

				<Route exact path="/s2e1" component={S2E1} />
				<Route exact path="/s2e2" component={S2E2} />
				<Route exact path="/s2r1" component={S2R1} />
				<Route exact path="/s2r2" component={S2R2} />
				<Route exact path="/s2post" component={S2Post} />

				<Route exact path="/s3e1" component={S3E1} />
				<Route exact path="/s3e2" component={S3E2} />
				<Route exact path="/s3r1" component={S3R1} />
				<Route exact path="/s3r2" component={S3R2} />

				<Route exact path="/s4e1" component={S4E1} />
				<Route exact path="/s4e2" component={S4E2} />
				<Route exact path="/s4e3" component={S4E3} />
				<Route exact path="/s4r1" component={S4R1} />
				<Route exact path="/s4r2" component={S4R2} />
				<Route exact path="/s4r3" component={S4R3} />

				<Route exact path="/s5e1" component={S5E1} />
				<Route exact path="/s5e2" component={S5E2} />
				<Route exact path="/s5r1" component={S5R1} />
				<Route exact path="/s5r2" component={S5R2} />
				<Route exact path="/s5post" component={S5Post} />

				<Route exact path="/s6e1" component={S6E1} />
				<Route exact path="/s6e2" component={S6E2} />
				<Route exact path="/s6r1" component={S6R1} />
				<Route exact path="/s6r2" component={S6R2} />

				<Route exact path="/s7e1" component={S7E1} />
				<Route exact path="/s7r1" component={S7R1} />

				<Route exact path="/s8e1" component={S8E1} />
				<Route exact path="/s8e2" component={S8E2} />
				<Route exact path="/s8r1" component={S8R1} />
				<Route exact path="/s8r2" component={S8R2} />
				<Route exact path="/s8post" component={S8Post} />
			</Container>
		</BrowserRouter>
	);
};

export default App;
