import CarById from "@/components/customComponents/CarDetails/CarById";
import { getCarById } from "@/services/api";

export default async function page({ params }) {
  const { id } = params;
  const response = await getCarById(id);
  const data = response.car;
  return (
    <>
      <CarById data={data} />
    </>
  );
}
