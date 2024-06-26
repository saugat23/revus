import Home from "@/components/customComponents/Dashboard/Host/Home/Home";
import { getAllCars } from "@/services/api";

export default async function page() {
  const response = await getAllCars();
  const cars = response.cars;
  return (
    <>
      <Home cars={cars} />
    </>
  );
}
