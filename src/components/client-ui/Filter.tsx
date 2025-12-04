import { filter, setFilter } from "@/stores/filterStore";
import Button from "../ui/Button";
import { Input } from "../ui/input";
import { useStore } from "@nanostores/react";

const Filter = () => {
  const filterValue = useStore(filter);
  return (
    <div className="flex gap-3 mb-8 flex-wrap">
      <div className="hidden ld:flex md:flex flex-row gap-x-3">
        <Button
          variant={filterValue.type === "ALL" ? "contained" : "outlined"}
          onClick={() => {
            setFilter({
              type: "ALL",
            });
          }}
        >
          Toutes
        </Button>
        <Button
          variant={filterValue.type === "NEW" ? "contained" : "outlined"}
          onClick={() => {
            setFilter({
              type: "NEW",
            });
          }}
        >
          Actualités
        </Button>
        <Button
          variant={filterValue.type === "FOLDER" ? "contained" : "outlined"}
          onClick={() => {
            setFilter({
              type: "FOLDER",
            });
          }}
        >
          Dossiers
        </Button>
      </div>
      <div className="border-b-1 border-b-primary flex flex-row items-center flex-1">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.44454 9.63912L4.75 7.33367M4.75 7.33367C5.24765 7.83132 5.93515 8.13912 6.69454 8.13912C8.21333 8.13912 9.44454 6.90791 9.44454 5.38912C9.44454 3.87034 8.21333 2.63912 6.69454 2.63912C5.17576 2.63912 3.94454 3.87034 3.94454 5.38912C3.94454 6.14852 4.25235 6.83602 4.75 7.33367Z"
            stroke="#1D1D1D"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>

        <Input placeholder="Recherche sur le site..." />
      </div>
      <Button variant="contained" color="secondary">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          stroke="currentColor"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex lg:hidden md:hidden"
        >
          <path
            d="M2.44454 9.63906L4.75 7.33361M4.75 7.33361C5.24765 7.83126 5.93515 8.13906 6.69454 8.13906C8.21333 8.13906 9.44454 6.90785 9.44454 5.38906C9.44454 3.87028 8.21333 2.63906 6.69454 2.63906C5.17576 2.63906 3.94454 3.87028 3.94454 5.38906C3.94454 6.14845 4.25235 6.83595 4.75 7.33361Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <span className="hidden lg:flex md:flex">Valider</span>
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="flex lg:hidden md:hidden"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          stroke="currentColor"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 4C9 4.82843 8.32843 5.5 7.5 5.5C6.67157 5.5 6 4.82843 6 4M9 4C9 3.17157 8.32843 2.5 7.5 2.5C6.67157 2.5 6 3.17157 6 4M9 4H10M6 4H2M3 8C3 8.82843 3.67157 9.5 4.5 9.5C5.32843 9.5 6 8.82843 6 8M3 8C3 7.17157 3.67157 6.5 4.5 6.5C5.32843 6.5 6 7.17157 6 8M3 8H2M6 8H10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </Button>
    </div>
  );
};

export default Filter;
