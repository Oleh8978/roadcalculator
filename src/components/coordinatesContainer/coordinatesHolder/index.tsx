import React from 'react';
import { connect, useDispatch } from 'react-redux';

// actions
import * as actions from '../../../controllers/sharedLngLat/actions';
import { searchRequestByCoordinatesAction } from '../../../controllers/googleMapsSearch/actions';
import * as actionsCoord from '../../../controllers/distanceCalculator/actions';

// interfaces
import { ISharedCoordinates } from '../../../controllers/sharedLngLat/models';
import { IStore } from '../../../controllers/storeModel';

interface IProps {
    name: string;
    nameBlock: string;
    sharedCoordinates: ISharedCoordinates
}

const  CoordinatesHolder: React.FC<IProps> = (props) =>{

    const dispatch = useDispatch();

    const valueForInput = () => {
      if (props.nameBlock === 'Origin location (point) ') {
        switch (props.name) {
          case 'Latitude':
            return props.sharedCoordinates.origin.lat
          default:
            return props.sharedCoordinates.origin.lng
        }
      } else {
        switch (props.name) {
          case 'Latitude':
            return props.sharedCoordinates.destination.lat
          default:
            return props.sharedCoordinates.destination.lng
        }
      }
    }

    const onChangeCoordinates = (text: string) => {
      dispatch(actionsCoord.checkPointsAction.success({
        code: 'NOT OK',
        waypoints: [],
        routes: []
      }))
      if (props.nameBlock === 'Origin location (point) ') {
        switch (props.name) {
          case 'Latitude':
            dispatch(searchRequestByCoordinatesAction.request({
              type: 'Origin location (point) ',
              coords:`${text},${props.sharedCoordinates.origin.lng}`
            }))
            return dispatch(actions.setOriginLatAction({
              lat: text,
              lng: props.sharedCoordinates.origin.lng
            }))
          default:
            dispatch(searchRequestByCoordinatesAction.request({
              type: 'Origin location (point) ',
              coords:`${props.sharedCoordinates.origin.lat},${text}`
            }))
            return dispatch(actions.setOriginLngAction({
              lat: props.sharedCoordinates.origin.lat,
              lng: text
            }))
        }
      } else {
        switch (props.name) {
          case 'Latitude':
            dispatch(searchRequestByCoordinatesAction.request({
              type: '',
              coords:`${text},${props.sharedCoordinates.destination.lng}`
            }))
            return dispatch(actions.setDestinationLatAction({
              lat: text,
              lng: props.sharedCoordinates.destination.lng
            }))
          default:
            dispatch(searchRequestByCoordinatesAction.request({
              type: '',
              coords:`${props.sharedCoordinates.destination.lat},${text}`
            }))
            return dispatch(actions.setDestinationLngAction({
              lat: props.sharedCoordinates.destination.lat,
              lng: text
            }))
        }
      }
    }

  return (
    <div className='coordinates-lat'>
        <span>{props.name}</span>{' '}
        <input  
            className='names-input-coordinates'
            placeholder='0.12132213'
            value={valueForInput()}
            onChange={(e)=>{onChangeCoordinates(e.target.value)}}
        >
        </input>
    </div>
  );
}

export default connect((store: IStore) => ({
  sharedCoordinates: store.sharedCoordinates,
}))(CoordinatesHolder);