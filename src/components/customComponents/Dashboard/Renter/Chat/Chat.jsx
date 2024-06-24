"use client";

import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import { FaCircleUser } from "react-icons/fa6";
import FriendImage1 from "@/../public/dashboard/friendsphoto.png";
import Image from "next/image";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  const friends = [
    {
      id: 1,
      photo: FriendImage1,
      name: "Cody Fisher",
      message: "Haha oh man",
      seen: true,
      message_count: "0",
      last_active: "05:14 PM",
    },
    {
      id: 2,
      photo: FriendImage1,
      name: "Jane Cooper",
      message: "Haha",
      seen: false,
      message_count: "5+",
      last_active: "07:54 PM",
    },
    {
      id: 1,
      photo: FriendImage1,
      name: "Floyd Miles",
      message: "perfect!",
      seen: false,
      message_count: "1",
      last_active: "02:14 PM",
    },
    {
      id: 1,
      photo: FriendImage1,
      name: "Marvin Mckinney",
      message: "Haha oh man",
      seen: false,
      message_count: "2",
      last_active: "09:14 AM",
    },
  ];

  const [activeUser, setActiveUser] = useState({});

  return (
    <>
      <section className="h-auto">
        <Tabs className="w-full flex justify-center items-start font-montserrat font-medium text-[#121820]">
          <div className="w-1/4 p-4 bg-[#F5FAFC] flex flex-col justify-start items-start space-y-5 min-h-screen">
            <FaCircleUser className="w-9 h-9 " />
            <div className="w-full relative">
              <input
                type="text"
                name="search_user"
                id="search_user"
                placeholder="Search or Start a new Chat"
                className="p-3 rounded-full pl-10 bg-white outline-none text-gray-500 w-full h-full text-sm"
              />
              <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 stroke-gray-500" />
            </div>
            <ul className="w-full">
              <TabsList className="flex flex-col !w-full !bg-transparent justify-center space-y-2">
                {friends.map((friend) => {
                  return (
                    <TabsTrigger
                      value={friend}
                      key={friend.id}
                      onClick={() => setActiveUser(friend)}
                    >
                      <li className="w-full h-full flex justify-between items-center hover:bg-[#016AFD1A] transition-colors duration-500 ease-in-out p-3 rounded-lg cursor-pointer">
                        <div className="flex justify-center space-x-2 h-full">
                          <Image
                            src={friend.photo}
                            alt="User Image"
                            className="rounded-lg object-center object-cover"
                          />
                          <div className="flex flex-col justify-around items-start">
                            <span className="font-semibold">{friend.name}</span>
                            <span className="font-normal text-sm">
                              {friend.message}
                            </span>
                          </div>
                        </div>
                        <div className="h-full flex flex-col justify-evenly">
                          <span className="text-gray-500 text-[10px]">
                            {friend.last_active}
                          </span>
                          <span className="fill-blue-500 text-blue-500 text-xs">
                            {friend.seen ? (
                              <IoCheckmarkDoneOutline className="w-4 h-4 inline" />
                            ) : (
                              `${friend.message_count}`
                            )}
                          </span>
                        </div>
                      </li>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </ul>
          </div>
          <div className="w-3/4 p-4 bg-[#FAFAFA]">
            <TabsContent
              className="w-full h-full flex flex-col justify-center"
              value={activeUser}
            ></TabsContent>
          </div>
        </Tabs>
      </section>
    </>
  );
}
