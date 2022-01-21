import React, { ReactElement } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Loader from './components/loader';
import Error from './components/error';

export interface IProps {

}

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return  <Error/>
  return <Loader/>
}

const App: React.FC<IProps> = () =>{
  return (
    <div className="main">
      <Wrapper apiKey={String(process.env.REACT_APP_GEO_KEY)} render={render}>
        <Error />
      </Wrapper>
    </div>
  );
}

export default App;
