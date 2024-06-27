import { getBillionaireById } from "@/lib/utils";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getBillionaireById(params.id);
  //   console.log(data);
  return (
    <div>
      <p></p>
    </div>
  );
}
