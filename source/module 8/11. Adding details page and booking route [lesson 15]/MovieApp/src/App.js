import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
const HomePage = React.lazy(() => import('homePage/HomePage'));
const DetailsPage = React.lazy(() => import('detailsPage/DetailsPage'));
const SeatSelectionPage = React.lazy(() => import('seatSelectionPage/SeatSelectionPage'));

const App = () => {
  return (
    <Switch>
      <Route path="/details">
	      <Suspense fallback={null}>
		      <DetailsPage></DetailsPage>
	      </Suspense>
      </Route>
      <Route path="/book">
	      <Suspense fallback={null}>
		      <SeatSelectionPage></SeatSelectionPage>
	      </Suspense>
      </Route>
      <Route path="/">
			  <Suspense fallback={null}>
				  <HomePage></HomePage>
			  </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
