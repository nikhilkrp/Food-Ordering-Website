const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(20).fill("").map((_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-tags"></div>
          <div className="shimmer-details"></div>
        </div>
      ))}
    </div>
  );
};



export default Shimmer;
