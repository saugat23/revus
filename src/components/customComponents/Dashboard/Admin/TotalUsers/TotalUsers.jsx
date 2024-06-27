"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  return (
    <>
      <section className="bg-white h-auto p-6 flex flex-col justify-center items-start space-y-4 font-inter text-sm w-[84vw] overflow-hidden">
        <div className="w-full bg-white shadow-custom px-4 py-6 flex flex-col justify-center items-start space-y-4">
          <h1 className="font-semibold text-base lg:text-lg xl:text-xl text-black">
            Total Users
          </h1>
          <Tabs defaultValue="hosts" className="w-full mt-4">
            <TabsList>
              <TabsTrigger
                value="hosts"
                className="px-5 pb-3 text-gray-700 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black"
              >
                Hosts
              </TabsTrigger>
              <TabsTrigger
                value="users"
                className="px-5 pb-3 text-gray-700 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black "
              >
                Users
              </TabsTrigger>
            </TabsList>
            <TabsContent value="hosts">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center font-normal text-gray-700">
                      Host ID
                    </TableHead>
                    <TableHead className="text-center font-normal text-gray-700">
                      Hostname
                    </TableHead>
                    <TableHead className="text-center font-normal text-gray-700">
                      Email
                    </TableHead>
                    <TableHead className="text-center font-normal text-gray-700">
                      Total Vehicles
                    </TableHead>
                    <TableHead className="text-center font-normal text-gray-700">
                      Active Since
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-center">#1006H</TableCell>
                    <TableCell className="text-center">
                      Darlene Robertson
                    </TableCell>
                    <TableCell className="text-center text-blue-500">
                      darlene@gmail.com
                    </TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">01/01/2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">#1006H</TableCell>
                    <TableCell className="text-center">
                      Darlene Robertson
                    </TableCell>
                    <TableCell className="text-center text-blue-500">
                      darlene@gmail.com
                    </TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">01/01/2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">#1006H</TableCell>
                    <TableCell className="text-center">
                      Darlene Robertson
                    </TableCell>
                    <TableCell className="text-center text-blue-500">
                      darlene@gmail.com
                    </TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">01/01/2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">#1006H</TableCell>
                    <TableCell className="text-center">
                      Darlene Robertson
                    </TableCell>
                    <TableCell className="text-center text-blue-500">
                      darlene@gmail.com
                    </TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">01/01/2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">#1006H</TableCell>
                    <TableCell className="text-center">
                      Darlene Robertson
                    </TableCell>
                    <TableCell className="text-center text-blue-500">
                      darlene@gmail.com
                    </TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">01/01/2022</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="users">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center font-normal text-gray-700">
                      User ID
                    </TableHead>
                    <TableHead className="text-center font-normal text-gray-700">
                      Username
                    </TableHead>
                    <TableHead className="text-center font-normal text-gray-700">
                      Email
                    </TableHead>
                    <TableHead className="text-center font-normal text-gray-700">
                      Total Rentals
                    </TableHead>
                    <TableHead className="text-center font-normal text-gray-700">
                      Members Since
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-center">#1006H</TableCell>
                    <TableCell className="text-center">
                      Darlene Robertson
                    </TableCell>
                    <TableCell className="text-center text-blue-500">
                      darlene@gmail.com
                    </TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">01/01/2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">#1006H</TableCell>
                    <TableCell className="text-center">
                      Darlene Robertson
                    </TableCell>
                    <TableCell className="text-center text-blue-500">
                      darlene@gmail.com
                    </TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">01/01/2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">#1006H</TableCell>
                    <TableCell className="text-center">
                      Darlene Robertson
                    </TableCell>
                    <TableCell className="text-center text-blue-500">
                      darlene@gmail.com
                    </TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">01/01/2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">#1006H</TableCell>
                    <TableCell className="text-center">
                      Darlene Robertson
                    </TableCell>
                    <TableCell className="text-center text-blue-500">
                      darlene@gmail.com
                    </TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">01/01/2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">#1006H</TableCell>
                    <TableCell className="text-center">
                      Darlene Robertson
                    </TableCell>
                    <TableCell className="text-center text-blue-500">
                      darlene@gmail.com
                    </TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">01/01/2022</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
