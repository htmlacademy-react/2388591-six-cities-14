import Card from '../card/card';
import { Offer } from '../../types/offer-type';

type OfferListProps = {
  offers: Offer[];
};
export default function OffersList({offers}: OfferListProps): JSX.Element {
  return(
    <div>
      <div className="offer-list">
        {offers.map((offer) => (
          <Card key={offer.id} offer ={offers} />
        ))}
      </div>
    </div>
  );
}
