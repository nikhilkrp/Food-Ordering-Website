const Grocery = () => {
  // Add some substantial content
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <h1>Grocery Store</h1>
      <p>This is a larger component with more content...</p>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default Grocery;
