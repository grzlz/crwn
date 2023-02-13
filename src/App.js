
const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats"
    },
    {
      id: 2,
      title: "Jackets"
    },
    {
      id: 3,
      title: "Sneakers"
    },
    {
      id: 4,
      title: "Womens"
    },
    {
      id: 5,
      title: "Mens"
    }
  ]
  return (
    <div className="categories-container">
      {[
        <div className="category-container"><div className="category-body-container"><h2>{categories[0].title}</h2><p>Shop now</p></div></div>,
        <div className="category-container"><div className="category-body-container"><h2>{categories[1].title}</h2><p>Shop now</p></div></div>,
        <div className="category-container"><div className="category-body-container"><h2>{categories[2].title}</h2><p>Shop now</p></div></div>,

      ]}

    </div>
  );
}

export default App;
