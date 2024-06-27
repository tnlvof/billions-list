import { convertMillionToBillion, getAllBillionaires } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
const Page = async () => {
  const data = await getAllBillionaires();
  // console.log(data);

  return (
    <div className="container mx-auto mb-10">
      <div className="grid grid-cols-4">
        {data?.map((billionaire: any) => (
          <Link href={`/person/${billionaire?.id}`} key={billionaire?.id}>
            <div key={billionaire.id} className="mb-6">
              <Image
                className="rounded-sm"
                src={billionaire?.squareImage}
                width={250}
                height={250}
                alt={billionaire?.name}
                unoptimized
              />
              <h2 className="text-base font-bold">{billionaire?.name}</h2>
              <p>
                <span className="text-sm text-gray-700 font-medium">
                  {convertMillionToBillion(billionaire?.netWorth)} Billion
                </span>{" "}
                /{" "}
                <span className="text-sm text-gray-700">
                  {billionaire?.industries}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
