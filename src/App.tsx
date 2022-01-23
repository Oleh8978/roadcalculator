import React, { ReactElement } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Loader from './components/loader';
import Error from './components/error';
import Calculator from './components/calculator';
import ErrorWarning from './components/errorWarning';

import { Config } from './config/api';

export interface IProps {}

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return  <Error/>
  if (status === Status.LOADING) return  <Loader/>
  return <Calculator/>
}

const App: React.FC<IProps> = () =>{
  return (
    <div className="main">
      <Wrapper apiKey={String(Config.GOOGLE_API_KEY)} render={render} />
      <ErrorWarning />
    </div>
  );
}

export default App;
