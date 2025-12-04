import type { Article } from "@/types";
import Badge from "../ui/Badge.astro";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import {news} from "@/stores/newStore"

const Events = () => {
  const newsList = useStore(news);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.example.com/dynamic-data");
      const result = await response.json();
    }
    fetchData();
  }, []);

  return (
    <>
      {/* {events.map((event) => (
        <div className="flex flex-row justify-center items-center lg:gap-x-3 lg:gap-y-3 lg:pb-3 md:gap-x-2 md:gap-y-2 md:pb-2 gap-x-[5px] gap-y-[5px] pb-[5px] border-b-1 border-[#DF877E]">
          <Badge
            variant="outlined"
            color="secondary"
            class="border-white text-white h-fit"
          >
            {event.date}
          </Badge>
          <div className="flex-1">
            <h3 className="font-[900] text-[16px] leading-[16px]">
              {event.title}
            </h3>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default Events;
