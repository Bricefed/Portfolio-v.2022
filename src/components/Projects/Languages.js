const Languages = ({ languages }) => {
  return (
    <div className="container-languages">
      {languages.map((lang, k) => (
        <span className="language" key={k}>
          <span>⇨</span> {lang}
        </span>
      ))}
    </div>
  );
};

export default Languages;
