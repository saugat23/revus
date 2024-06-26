import Listings from "@/components/customComponents/Dashboard/Host/Listings/Listings";
import { getAllCars } from "@/services/api";

export default async function page() {
  const response = await getAllCars();
  const cars = response.cars;
  return (
    <>
      <Listings cars={cars} />
    </>
  );
}
