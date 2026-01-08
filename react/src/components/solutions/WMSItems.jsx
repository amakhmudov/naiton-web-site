import InventoryIcon from "@/assets/icons/solutions/inventory.svg?react";
import LocationIcon from "@/assets/icons/solutions/location.svg?react";

export default function WMSItems() {
  return (
    <>
      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <InventoryIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Inventory management</p>
        <ul className="list-disc">
          <li>Multiple inventory locations - Vehicles can also be an inventory location</li>
          <li>Note: Based on &quot;Iron stock&quot; vehicle, we can create a pick list to get stock in the vehicle back up to standard → When order picking, send the items directly from Naiton via Postl / UPS / DHL to a location (immediately correct location or mechanic&apos;s home address)</li>
          <li>Determine required order quantities (suggestion) based on current Tickets and &quot;Iron stocks&quot; (Min / Max signals)</li>
          <li>Basis for purchasing / production</li>
          <li>Determining the value of stock</li>
          <li>Movements and the historical stock</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <LocationIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Where is the article in question located? What is its status?</p>
        <ul className="list-disc">
          <li>Which warehouse, which vehicle?</li>
          <li>Piece or whole? → Send for repair</li>
          <li>Defective? → Repair center</li>
        </ul>
      </li>
    </>
  );
}
