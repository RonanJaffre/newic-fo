import { useEffect, useState } from "react";
import Button from "../ui/Button";

const regionsList: string[] = [
  "Auvergne-Rhône-Alpes",
  "Bourgogne-Franche-Comté",
  "Bretagne",
  "Centre-Val de Loire",
  "Corse",
  "Grand Est",
  "Hauts-de-France",
  "Île-de-France",
  "Normandie",
  "Île-de-France",
  "Occitanie",
  "Pays de la Loire",
  "Provences-Alpes-Côte d'Azur",
  "Guadeloupe",
  "Guyane",
  "Martinique",
  "La Réunion",
  "Mayotte",
];

interface Props {
  list?: string[];
  title?: string;
}
const Region = (props: Props) => {
  const params = new URLSearchParams(window.location.search);

  const [regions, setRegions] = useState(
    (params.get("region") ?? "").split(";")
  );

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("region", regions.join(";"));
    window.history.replaceState({}, "", url);
  }, [regions]);

  const handleSelect = (i: string) => {
    setRegions((prev) => {
      if (prev.includes(i)) {
        return prev.filter((l) => i !== l);
      }
      return [...prev, i];
    });
  };

  const handleClear = () => {
    setRegions([]);
  };

  return (
    <section className="mt-4">
      <div className="flex flex-row items-center gap-x-3">
        <h3>{props.title ?? "Régions"}</h3>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="13.5"
            y="0.5"
            width="13"
            height="13"
            rx="6.5"
            transform="rotate(90 13.5 0.5)"
            stroke="#D15447"
          ></rect>
          <path
            d="M10 6L7 9L4 6"
            stroke="#D15447"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-x-2 w-full container mx-auto flex-wrap">
          {(props.list ?? regionsList).map((i) => (
            <div
              onClick={() => {
                handleSelect(i);
              }}
            >
              {regions.includes(i) ? (
                <span className="font-[400] text-[14px] border-primary border-1  rounded-2xl px-2 py-[2px] cursor-pointer">
                  {i}
                </span>
              ) : (
                <span className="font-[400] text-[14px] cursor-pointer">
                  {i}
                </span>
              )}
            </div>
          ))}
        </div>
        <Button
          className="h-fit"
          onClick={() => {
            handleClear();
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.44454 9.63906L4.75 7.33361M4.75 7.33361C5.24765 7.83126 5.93515 8.13906 6.69454 8.13906C8.21333 8.13906 9.44454 6.90785 9.44454 5.38906C9.44454 3.87028 8.21333 2.63906 6.69454 2.63906C5.17576 2.63906 3.94454 3.87028 3.94454 5.38906C3.94454 6.14845 4.25235 6.83595 4.75 7.33361Z"
              stroke="#F8F8F8"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span>Réinitialiser</span>
        </Button>
      </div>
    </section>
  );
};
export default Region;
