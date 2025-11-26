import CountryItem from "./CountryItem";

function CountryList({ countries }) {
  return (
    <ul className="countries-list">
      {countries.map((country) => {
        return <CountryItem country={country} />;
      })}
    </ul>
  );
}

export default CountryList;
