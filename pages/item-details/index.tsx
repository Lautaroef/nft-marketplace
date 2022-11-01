import ItemDetailsComponent from "../../components/item-details";
import LiveAuctions from "../../components/live-auctions";

function ItemDetailsPage() {
  return (
    <div className="item_details_page">
      <ItemDetailsComponent />
      <LiveAuctions />
    </div>
  );
}

export default ItemDetailsPage;
