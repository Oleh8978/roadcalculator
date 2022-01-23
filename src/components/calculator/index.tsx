import React from 'react';

import Map from '../map';
import CoordinatesBlock from '../coordinatesContainer'
import TransportTypeSelect from '../transportSelect/index';
import SubmitButton from '../searchBtn/index';

interface IProps {}

const  Calculator: React.FC<IProps> = () => {
  return (
    <div className="calculator">
        <div className='calculator-fields'>
            <CoordinatesBlock nameOfBlock={'Origin location (point) '}/>
            <CoordinatesBlock nameOfBlock={'Destination location (point) '}/>
            <TransportTypeSelect result={'0.00'}/>
            <SubmitButton />
        </div>
        <div className='calculator-map'>
            <Map />
        </div>
    </div>
  );
}

export default Calculator;
