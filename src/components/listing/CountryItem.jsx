function CountryItem({ country }) {
  return (
    <li key={country.flag} className="country">
      <span className="flag">{country.flag}</span>
      <div className="country-body">
        <h2 class="country-name">{country.name.common}</h2>
        <p class="country-official">{country.name.official}</p>
        <p class="country-native">{country.name.nativeName.eng?.common}</p>
        <p class="country-capital">{country.capital}</p>
      </div>
    </li>
  );
}

export default CountryItem;
