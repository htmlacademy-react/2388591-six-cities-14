import { useEffect, useRef } from 'react';

import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { TPreviewOffer } from '../../types/preview-offer';
import { TLocation } from '../../types/location';

import { useMap } from '../../hooks/use-map';

type MapProps = {
  offers: TPreviewOffer[];
  specialOfferId: TPreviewOffer['id'] | null;
  block: string;
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

const DEFAULT_LOCATION: TLocation = {latitude: 0, longitude: 0, zoom: 10};

function Map({ offers, specialOfferId, block }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, DEFAULT_LOCATION);
  const location = offers.length > 0 ? offers[0].location : DEFAULT_LOCATION;


  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, location.latitude, location.longitude]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        const markerIcon = offer.id === specialOfferId ? activeIcon : defaultIcon;

        marker
          .setIcon(createIcon(markerIcon))
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId]);

  return (
    <section
      className={`${block}__map map`}
      ref={mapRef}
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto',
      }}
    >
    </section>
  );
}

export { Map };

