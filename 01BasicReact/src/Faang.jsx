function Faang({ title, companies }) {

  return (
    <>
      <h1>I am from {title}</h1>
      <p>
        {companies.map((company) => {
          return (company = <li>{company.toUpperCase()}</li>);
        })}
      </p>
    </>
  );
}
export default Faang;
