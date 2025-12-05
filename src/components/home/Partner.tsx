import { useEffect, useState } from "react";
import Bouygues from "../logo/Bouygues.svg";
import BouyguesBatiment from "../logo/BouyguesBatiment.svg";
import BouyguesImmo from "../logo/BouyguesImmo.svg";
import BouyguesTelecom from "../logo/BouyguesTelecom.svg";
import Colas from "../logo/Colas.svg";
import Equans from "../logo/Equans.svg";
import Tfi from "../logo/Tfi.svg";

const partnerList = [
  {
    name: "1",
    logo: BouyguesBatiment,
  },
  {
    name: "2",
    logo: BouyguesImmo,
  },
  {
    name: "3",
    logo: Bouygues,
  },
  {
    name: "4",
    logo: BouyguesTelecom,
  },
  {
    name: "5",
    logo: Colas,
  },
  {
    name: "6",
    logo: Equans,
  },
  {
    name: "7",
    logo: Tfi,
  },
];
const Partner = () => {
  const params = new URLSearchParams(window.location.search);

  const [company, setCompany] = useState(
    (params.get("company") ?? "").split(";")
  );

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("company", company.join(";"));
    window.history.replaceState({}, "", url);
  }, [company]);

  const handleSelect = (i: string) => {
    setCompany((prev) => {
      if (prev.includes(i)) {
        return prev.filter((l) => i !== l);
      }
      return [...prev, i];
    });
  };

  return (
    <section className="flex flex-row justify-between w-full flex-wrap gap-1">
      {partnerList.map((i) => (
        <div
          className={`relative hover:shadow-sm rounded-full transition-shadow cursor-pointer duration-400 ${
            company.includes(i.name)
              ? "border-primary border-1 rounded-3xl"
              : ""
          }`}
          onClick={(e) => {
            handleSelect(i.name);
          }}
        >
          <img src={i.logo.src as string} />
          {company.includes(i.name) && (
            <button className="absolute right-0 top-[-10px] bg-primary p-[5px] leading-none h-[25px] w-[25px] flex flex-row items-center justify-center rounded-full text-white">
              x
            </button>
          )}
        </div>
      ))}
    </section>
  );
};

export default Partner;
