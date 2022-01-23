import React from 'react';
import { connect, useDispatch } from 'react-redux';

// actions 
import * as actions from '../../controllers/distanceCalculator/actions';
import { setNewError } from '../../controllers/errorHandler/action';

// interfaces
import { IStore } from '../../controllers/storeModel';
import { IGoogleApiResult } from '../../controllers/googleMapsSearch/models';
import { IRouteCalculatorState } from '../../controllers/distanceCalculator/models';
import { IError } from '../../controllers/errorHandler/model';


export interface IProps {
    coordinatesOrigin: IGoogleApiResult | null,
    coordinatesDestination: IGoogleApiResult | null,
    distance: IRouteCalculatorState,
    errors: IError[]
}

const SubmitButton: React.FC<IProps> = (props)  =>{

    const dispatch = useDispatch();

    const calculate = () => {

        if (props.coordinatesOrigin?.geometry.location.lat 
                && props.coordinatesOrigin?.geometry.location.lng &&
                props.coordinatesDestination?.geometry.location.lng &&
                props.coordinatesDestination.geometry.location.lat) {
                    const requestString = `${props.coordinatesOrigin?.geometry.location.lat},${props.coordinatesOrigin?.geometry.location.lng};${props.coordinatesDestination?.geometry.location.lat},${props.coordinatesDestination.geometry.location.lng}`
            dispatch(actions.checkPointsAction.request(requestString))

            const idMap = document.getElementById('map')

            if (props.errors.filter( item => item.type === 'Calculating error').length !== 0) {
                return
            }

            if (props.distance.response.waypoints && idMap) {

                const directionsRenderer = new google.maps.DirectionsRenderer();
                const map = new google.maps.Map(
                    document.getElementById("map") as HTMLElement,
                    {
                      zoom: 6,
                      center: { 
                          lat: (props.coordinatesOrigin.geometry.location.lat + props.coordinatesDestination.geometry.location.lat) /2, 
                          lng: (props.coordinatesOrigin.geometry.location.lng + props.coordinatesDestination.geometry.location.lng) /2
                        },
                    }
                );
                
                directionsRenderer.setMap(map);

                calculateAndDisplayRoute(
                    new google.maps.DirectionsService(), 
                    directionsRenderer,
                    [...props.distance.response.waypoints.map(item => {
                        return {
                        location: `${item.location[0]+ ',' +item.location[1]}`,
                        stopover: false
                    }})],
                    props.coordinatesOrigin.formatted_address,
                    props.coordinatesDestination.formatted_address
                    )
            }
        }
    }

    const calculateAndDisplayRoute = async (
        directionsService: google.maps.DirectionsService,
        directionsRenderer: google.maps.DirectionsRenderer,
        waypts: google.maps.DirectionsWaypoint[] = [],
        origin: string,
        destination: string
      ) =>  {
        try {
            await directionsService
                .route({
                origin: origin,
                destination: destination,
                waypoints: waypts,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING,
                }, (response) => { directionsRenderer.setDirections(response)});
    
        } catch (e) {
            dispatch(setNewError({
                id: Math.random(),
                type: 'Google map error',
                msg: 'creation rout failed'
            }))
        }
    }
  
return (
    <div 
        className='submit-btn'
        onClick={() => calculate()}
    >
        Submit
    </div>
    );
  }

export default connect((store: IStore) => ({
    coordinatesOrigin: store.coordinates.origin,
    coordinatesDestination: store.coordinates.destination,
    distance: store.distance,
    errors: store.errors.errors
  }))(SubmitButton);
