import { useEffect, useRef } from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import { TLocation } from '../../types/offer-type';
import { useMap } from '../../hooks/use-map';
import { Offer } from '../../types/offer-type';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  location: TLocation;
  offers: Offer[];
  specialOfferId: Offer['id'] | null;
};
type TIcon ={
  url: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
};

const defaultIcon: TIcon = {
  url: '/img/pin.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40
};

const activeIcon: TIcon = {
  url: '/img/pin-active.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40

};

function createIcon(config: TIcon) {
  return new Icon({
    iconUrl:config.url,
    iconSize: [config.width, config.height],
    iconAnchor: [config.anchorX, config.anchorY]
  });

}

function Map({offers, location, specialOfferId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if(map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            offer.id === specialOfferId
              ? createIcon(activeIcon)
              : createIcon(defaultIcon)
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId]);
  return(
    <section className='cities__map map' ref={mapRef}></section>
  );
}

export {Map};

