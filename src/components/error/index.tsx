import React from 'react';

interface IProps {

}

const  Error: React.FC<IProps> = () =>{
  return (
    <div className="error">
        <div className='error-info' onClick={() => window.location.reload()}>
            <div className='error-text'>Something went wrong</div>
            <div className='error-button'>Press to reload the page</div>
        </div>
    </div>
  );
}

export default Error;
