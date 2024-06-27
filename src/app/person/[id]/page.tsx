import { convertMillionToBillion, getBillionaireById } from "@/lib/utils";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getBillionaireById(params.id);
  //   console.log(data);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <Image
              src={data.squareImage}
              alt={data.name}
              width={250}
              height={250}
              unoptimized
            />
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            <div>
              <p className="text-xl font-bold">{data?.name}</p>
            </div>
            <div className="text-lg font-medium">
              <p>State : {data?.state}</p>
              <p>City : {data?.city}</p>
              <p>Country : {data?.country}</p>
              <p>Industries : {data?.industries}</p>
              <p>Rank : {data?.position}</p>
              <p>
                NetWorth : {convertMillionToBillion(data?.netWorth)} Billion
              </p>
            </div>
            <div>
              <p>{data?.about}</p>
            </div>
            <div>
              {data?.bio?.map((bio: string, index: number) => (
                <li key={index}>{bio}</li>
              ))}
            </div>
          </div>
        </CardContent>
        {data.financialAssets && (
          <CardFooter>
            <div className="w-full mt-10">
              <p className="text-lg font-medium">FinancialAssets</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Exchange</TableHead>
                    <TableHead>Ticker</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Shares</TableHead>
                    <TableHead>SharePrice</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.financialAssets?.map((asset: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell> {asset.exchange}</TableCell>
                      <TableCell>{asset.ticker}</TableCell>
                      <TableCell>{asset.companyName}</TableCell>
                      <TableCell>
                        {asset.numberOfShares.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {asset.sharePrice.toLocaleString()} {asset.currencyCode}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardFooter>
        )}
      </Card>
    </>
  );
}
