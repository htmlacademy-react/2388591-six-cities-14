import Card from '../card/card';
import { Offer } from '../../types/offer-type';

type NearbyOffersListProps = {
  nearbyOffers: Offer[];
  onCardHover: (offerId: Offer['id'] | null) => void;
};

function NearbyOffersList ({ nearbyOffers, onCardHover }:NearbyOffersListProps) {
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((nearbyOffer) => (
          <Card
            key={nearbyOffer.id}
            offer={nearbyOffer}
            block='near-places'
            onCardHover={() => onCardHover(nearbyOffer.id)}
          />
        ))}
      </div>
    </section>
  );
}

export {NearbyOffersList};
