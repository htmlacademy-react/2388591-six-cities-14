import Card from '../card/card';
import { TOffer } from '../../types/offer-type';

type NearbyOffersListProps = {
  nearbyOffers: TOffer[];
};

function NearbyOffersList ({ nearbyOffers }:NearbyOffersListProps) {
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((nearbyOffer) => (
          <Card
            key={nearbyOffer.id}
            offer={nearbyOffer}
            block='near-places'
          />
        ))}
      </div>
    </section>
  );
}

export {NearbyOffersList};
