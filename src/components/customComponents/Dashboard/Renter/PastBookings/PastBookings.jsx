"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaUser } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <section className="h-auto p-6 flex flex-col justify-center items-center space-y-4">
        <div className="bg-white w-full shadow-xl p-5 flex flex-col justify-center items-start space-y-3 rounded-lg">
          <h2 className="xl:text-lg text-base font-semibold font-montserrat text-primary">
            Past Bookings
          </h2>

          <Table className="font-montserrat font-medium text-sm">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[10%]">No.</TableHead>
                <TableHead className="w-[10%]">Car No.</TableHead>
                <TableHead className="w-[20%]">Driver</TableHead>
                <TableHead className="w-[20%]">Status</TableHead>
                <TableHead className="w-[40%] flex justify-between items-center">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>01</TableCell>
                <TableCell>
                  <span className="rounded-lg p-2 bg-gray-100">6465</span>
                </TableCell>
                <TableCell>
                  <FaUser className="w-4 h-4 mr-2 inline" />
                  Alex Noman
                </TableCell>
                <TableCell>
                  <span className="w-2 h-2 rounded-full border-green-500 bg-green-500 mr-2"></span>
                  Completed
                </TableCell>
                <TableCell className="flex justify-between items-center">
                  <span>24/04/2023</span>
                  <span>
                    <button className="bg-[#006aff] py-2 px-3 rounded-lg text-white">
                      Details
                    </button>
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>01</TableCell>
                <TableCell>
                  <span className="rounded-lg p-2 bg-gray-100">6465</span>
                </TableCell>
                <TableCell>
                  <FaUser className="w-4 h-4 mr-2 inline" />
                  Alex Noman
                </TableCell>
                <TableCell>
                  <span className="w-2 h-2 rounded-full border-green-500 bg-green-500 mr-2"></span>
                  Completed
                </TableCell>
                <TableCell className="flex justify-between items-center">
                  <span>24/04/2023</span>
                  <span>
                    <button className="bg-[#006aff] py-2 px-3 rounded-lg text-white">
                      Details
                    </button>
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>01</TableCell>
                <TableCell>
                  <span className="rounded-lg p-2 bg-gray-100">6465</span>
                </TableCell>
                <TableCell>
                  <FaUser className="w-4 h-4 mr-2 inline" />
                  Eden Hazard
                </TableCell>
                <TableCell>
                  <span className="w-2 h-2 rounded-full border-green-500 bg-green-500 mr-2"></span>
                  Pending
                </TableCell>
                <TableCell className="flex justify-between items-center">
                  <span>24/04/2023</span>
                  <span>
                    <button className="bg-[#006aff] py-2 px-3 rounded-lg text-white">
                      Details
                    </button>
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>01</TableCell>
                <TableCell>
                  <span className="rounded-lg p-2 bg-gray-100">6465</span>
                </TableCell>
                <TableCell>
                  <FaUser className="w-4 h-4 mr-2 inline" />
                  Alex Noman
                </TableCell>
                <TableCell>
                  <span className="w-2 h-2 rounded-full border-green-500 bg-green-500 mr-2"></span>
                  In Route
                </TableCell>
                <TableCell className="flex justify-between items-center">
                  <span>24/04/2023</span>
                  <span>
                    <button className="bg-[#006aff] py-2 px-3 rounded-lg text-white">
                      Details
                    </button>
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>01</TableCell>
                <TableCell>
                  <span className="rounded-lg p-2 bg-gray-100">6465</span>
                </TableCell>
                <TableCell>
                  <FaUser className="w-4 h-4 mr-2 inline" />
                  Alex Noman
                </TableCell>
                <TableCell>
                  <span className="w-2 h-2 rounded-full border-green-500 bg-green-500 mr-2"></span>
                  In Route
                </TableCell>
                <TableCell className="flex justify-between items-center">
                  <span>24/04/2023</span>
                  <span>
                    <button className="bg-[#006aff] py-2 px-3 rounded-lg text-white">
                      Details
                    </button>
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
