import React from 'react';
import { connect, useDispatch } from 'react-redux';

// actions
import { setFeeAction } from '../../controllers/feeReducer/actions';
import { setDropdown } from '../../controllers/dropdownReducer/actions';

// interfaces
import { IStore } from '../../controllers/storeModel';
import { ITransport } from '../../interfaces/ITransport';
import { IRouteCalculatorState } from '../../controllers/distanceCalculator/models';

// constants 
import { availableTransport } from '../../assets/constants';

export interface IProps {
    result: string,
    transport: ITransport,
    isOpened: boolean,
    distance: IRouteCalculatorState,
    fee: number
}

const TransportTypeSelect: React.FC<IProps> = (props)  =>{

    const dispatch = useDispatch();

    const priceCalculator = () => {
        if (props.distance.response.waypoints) {
            const sum = [...props.distance.response.waypoints.map(item => item.distance)].reduce((partial_sum, a) => partial_sum+ a, 0);

            return {
                distance: sum .toFixed(2),
                price: (props.fee * sum ).toFixed(2)
            }
        }

        return {
            distance: 0.00,
            price: 0.00,
        }
    }
  
    return(
        <div className='results'>
        <div className='results-left'>
            <div className='results-left-type'
                onClick={() => dispatch(setDropdown({isOpened: !props.isOpened}))}
            >
                {props.transport.name}, fee: {`${props.transport.price} €/km`}
            </div>
            <div className='results-left-list'>
                {props.isOpened && availableTransport.map(item => {
                    return(
                        <div 
                            key={item.name}
                            className='results-left-list-item'
                            onClick={() => { dispatch(setDropdown({isOpened: false})); dispatch(setFeeAction(item))}}
                        >
                            {item.name}, fee: {`${item.price} €/km`}
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='results-right'>
            <div className='results-right-calculated'>
                total amount: {priceCalculator().price} € = {priceCalculator().distance} km
            </div>
        </div>
    </div>
    );
  }

  export default connect((store: IStore) => ({
    searchState: store.googleSelectSearch,
    distance: store.distance,
    transport: store.feeReducer,
    isOpened:  store.dropdown.isOpened,
    fee: store.feeReducer.price,
  }))(TransportTypeSelect);
