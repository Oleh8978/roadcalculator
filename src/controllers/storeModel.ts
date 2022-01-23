import { IGoogleSearchState } from './googleMapsSearch/models';
import { ITransport } from '../interfaces/ITransport';
import { ICoordinatesState} from './coordinates/models';
import { ISharedCoordinates } from './sharedLngLat/models';
import { IAddressState } from './addressField/models';
import { IZoomCenter } from './zoomCenter/models';
import { ILoaderState } from './listLoader/models';
import { ITypingState } from './typingReducer/models';
import { IRouteCalculatorState } from './distanceCalculator/models';
import { IDropdownState } from './dropdownReducer/models';
import { IErrorsState } from './errorHandler/model';

export interface IStore {
    googleSelectSearch: IGoogleSearchState,
    feeReducer: ITransport,
    coordinates: ICoordinatesState,
    sharedCoordinates: ISharedCoordinates,
    addressReducer: IAddressState,
    setZoomCenter: IZoomCenter,
    smallLoader: ILoaderState,
    typingTimeOut: ITypingState,
    distance: IRouteCalculatorState,
    dropdown: IDropdownState,
    errors: IErrorsState
}
