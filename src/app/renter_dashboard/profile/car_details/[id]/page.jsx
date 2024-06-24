import CarById from "@/components/customComponents/Dashboard/Renter/Profile/CarDetails/CarById";

export default function page({ params }) {
  const { id } = params;
  console.log(id);
  return (
    <>
      <CarById />
    </>
  );
}
