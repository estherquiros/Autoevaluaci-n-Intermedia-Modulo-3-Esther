import { useState } from "react";
import "../styles/App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import CountryList from "./listing/CountryList";
import Filters from "./listing/Filters";
const countryInfo = [
  {
    name: {
      common: "Antigua and Barbuda",
      official: "Antigua and Barbuda",
      nativeName: {
        eng: {
          official: "Antigua and Barbuda",
          common: "Antigua and Barbuda",
        },
      },
    },
    capital: ["Saint John's"],
    flag: "🇦🇬",
  },
  {
    name: {
      common: "Italy",
      official: "Italian Republic",
      nativeName: {
        ita: {
          official: "Repubblica italiana",
          common: "Italia",
        },
      },
    },
    capital: ["Rome"],
    flag: "🇮🇹",
  },
  {
    name: {
      common: "Tuvalu",
      official: "Tuvalu",
      nativeName: {
        eng: {
          official: "Tuvalu",
          common: "Tuvalu",
        },
        tvl: {
          official: "Tuvalu",
          common: "Tuvalu",
        },
      },
    },
    capital: ["Funafuti"],
    flag: "🇹🇻",
  },
  {
    name: {
      common: "Anguilla",
      official: "Anguilla",
      nativeName: {
        eng: {
          official: "Anguilla",
          common: "Anguilla",
        },
      },
    },
    capital: ["The Valley"],
    flag: "🇦🇮",
  },
  {
    name: {
      common: "Australia",
      official: "Commonwealth of Australia",
      nativeName: {
        eng: {
          official: "Commonwealth of Australia",
          common: "Australia",
        },
      },
    },
    capital: ["Canberra"],
    flag: "🇦🇺",
  },
  {
    name: {
      common: "Belize",
      official: "Belize",
      nativeName: {
        bjz: {
          official: "Belize",
          common: "Belize",
        },
        eng: {
          official: "Belize",
          common: "Belize",
        },
        spa: {
          official: "Belice",
          common: "Belice",
        },
      },
    },
    capital: ["Belmopan"],
    flag: "🇧🇿",
  },
];

function App() {
  // Datos de la app
  const [countries] = useState(countryInfo);

  const [filterText, setFilterText] = useState("");

  // Listado filtrado

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLocaleLowerCase()
      .includes(filterText.toLocaleLowerCase())
  );

  console.log("filterText", filterText);

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInputFilter = (ev) => {
    //console.log(ev.target.value);
    setFilterText(ev.target.value);
  };

  return (
    <div>
      <Header />
      <main className="main">
        <Filters
          handleInputFilter={handleInputFilter}
          handleSubmit={handleSubmit}
        />
        <CountryList countries={filteredCountries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
