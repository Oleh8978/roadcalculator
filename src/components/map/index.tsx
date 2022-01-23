import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';


import { IStore } from '../../controllers/storeModel';
import { IZoomCenter } from '../../controllers/zoomCenter/models';

export interface IProps {
    zoomCenter: IZoomCenter
}

const Map: React.FC<IProps> = (props)  =>{
    const ref = useRef(null)
  
    useEffect(() => {
      new window.google.maps.Map(ref.current!, {
        ...props.zoomCenter
      });
      // drawRoute();
    });

    const drawRoute = () => {
        const idMap = document.getElementById('map')

        if (idMap) {
          const map = new google.maps.Map(idMap, {
            zoom: 5,
            center: {lat:1, lng:1}
          });
        }

    }
  
    return <div ref={ref} id="map"/>;
  }

  export default connect((store: IStore) => ({
    zoomCenter: store.setZoomCenter
  }))(Map);
