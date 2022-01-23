import React from 'react';
import { connect, useDispatch } from 'react-redux';

import CoordinatesHolder from './coordinatesHolder';

// actions
import { searchRequestAction, setInputType } from '../../controllers/googleMapsSearch/actions';
import { setOriginAction, setDestination } from '../../controllers/coordinates/actions';
import { setAddressDestinationAction, setAddressOriginAction } from '../../controllers/addressField/actions';
import * as actionsFields from '../../controllers/sharedLngLat/actions';
import { setZoomCenterAction } from '../../controllers/zoomCenter/actions';
import { setSmallLoader } from '../../controllers/listLoader/actions';
import { setTypingTimeOut } from '../../controllers/typingReducer/actions';
import * as actions from '../../controllers/distanceCalculator/actions';

// interfaces 
import { IStore } from '../../controllers/storeModel';
import { IGoogleApiResult, IGoogleSearchState } from '../../controllers/googleMapsSearch/models';
import { ISharedCoordinates } from '../../controllers/sharedLngLat/models';
import { IAddressState } from '../../controllers/addressField/models';

export interface IProps {
    nameOfBlock: string;
    searchState: IGoogleSearchState;
    sharedCoordinates: ISharedCoordinates;
    address: IAddressState;
    smallLoader: boolean;
    typingTimeOut: number
}

const CoordinatesBlock: React.FC<IProps> = (props)  => {

    const dispatch = useDispatch();

    const onChangeHandler = (text:string) => {
        dispatch(actions.checkPointsAction.success({
          code: 'NOT OK',
          waypoints: [],
          routes: []
        }))
        dispatch(setInputType(props.nameOfBlock))
        dispatch(setSmallLoader({loader: true}))

        if (props.typingTimeOut) {
            clearTimeout(props.typingTimeOut);
        }

        props.nameOfBlock === 'Origin location (point) ' ? 
          dispatch(setAddressOriginAction(text)) : 
          dispatch(setAddressDestinationAction(text));

          dispatch(setTypingTimeOut({
              typingTimeOut: setTimeout(
                function () {
                  dispatch(setSmallLoader({loader: false}))
                  if (text.trim().length !== 0) {
                    dispatch(searchRequestAction.request(text));
                  } else {
                    dispatch(searchRequestAction.success({results: undefined,
                        status: 'OK'}));
                  }
                }, 2000
              ),
          }))
    }

    const setOriginData = (data: IGoogleApiResult) => {
      dispatch(setOriginAction(data));
      dispatch(setAddressOriginAction(data.formatted_address));

      dispatch(actionsFields.setOriginLatAction({
        lat: String(data.geometry.location.lat),
        lng: props.sharedCoordinates.origin.lng
      }));

      dispatch(actionsFields.setOriginLngAction({
        lat: props.sharedCoordinates.origin.lat,
        lng: String(data.geometry.location.lng)
      }));
    }

    const setDestinationData = (data: IGoogleApiResult) => {
      dispatch(setDestination(data));
      dispatch(setAddressDestinationAction(data.formatted_address));

      dispatch(actionsFields.setDestinationLatAction({
        lat: String(data.geometry.location.lat),
        lng: props.sharedCoordinates.destination.lng
      }));

      dispatch(actionsFields.setDestinationLngAction({
        lat: props.sharedCoordinates.destination.lat,
        lng: String(data.geometry.location.lng)
      }));
    }

    const bodyProvider = () => {

      if (props.searchState.typeInput !== props.nameOfBlock ) {
        return <></>
      }

      if (props.smallLoader) {
        return <div className='item' >Loading...</div >
      }

      return (
        <>
          {props.searchState.data?.results?.map(item => {
              return (
              <div 
                  className='item' 
                  key={item.formatted_address}
                  onClick={() => {
                          props.nameOfBlock === 'Origin location (point) ' ? 
                              setOriginData(item):
                              setDestinationData(item);
                              dispatch(setZoomCenterAction({center: item.geometry.location, zoom: 15}))
                              dispatch(searchRequestAction.success({results: undefined, status: 'OK'}));
              }}
              >
                  {item.formatted_address}
              </div>)
          })}
        </>
      )

    }

    return (
      <div className='names'>
        <span className='names-text'>
            {props.nameOfBlock}
        </span>
        <div className='names-input-wrapper'>
            <input 
                value={props.nameOfBlock === 'Origin location (point) ' ? 
                  props.address.addressOrigin 
                  : 
                  props.address.addressDestination 
                } 
                placeholder='address'
                className='names-input'
                onChange={(e) => onChangeHandler(e.target.value)}
            >
            </input>
            <div className='names-input-wrapper-list'>
              {bodyProvider()}
            </div>
        </div>
        <div className='coordinates'>
            <CoordinatesHolder 
                name={'Latitude'} 
                nameBlock={props.nameOfBlock}
            />
            <CoordinatesHolder 
                name={'Longitude'} 
                nameBlock={props.nameOfBlock}
            />
        </div>
    </div>
    );
  }

  export default connect((store: IStore) => ({
    searchState: store.googleSelectSearch,
    sharedCoordinates: store.sharedCoordinates,
    address: store.addressReducer,
    smallLoader: store.smallLoader.loader,
    typingTimeOut: store.typingTimeOut.typingTimeOut
  }))(CoordinatesBlock);
