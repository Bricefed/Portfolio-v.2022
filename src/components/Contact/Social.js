const Social = ({ title, img, link }) => {
  return (
    <div className="social">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={`./icons/social/${img}`} alt={title} />
        <p>{title}</p>
      </a>
    </div>
  );
};

export default Social;
