import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="menu shimmer-menu">
      {/* Header */}
      <header className="menu-header shimmer-menu stroke animate">
        <div className="menu-header-left shimmer-menu stroke animate">
          <img
            src="https://via.placeholder.com/100?text=..."
            alt="loading..."
            className="stroke animate"
          />
        </div>

        <div className="menu-header-right shimmer-menu stroke animate">
          <div className="top shimmer-menu stroke animate">
            <h1 className="stroke animate shimmer-title"></h1>
            <h3 className="stroke animate shimmer-subtitle"></h3>
          </div>

          <div className="bottom shimmer-menu stroke animate">
            <h4 className="avg-rating shimmer-menu stroke animate">
              <span
                className="icons shimmer-menu stroke animate"
                style={{
                  position: "relative",
                  top: "2px",
                  marginRight: "3px",
                }}
              ></span>
              <span className="stroke animate shimmer-small-line"></span>
            </h4>

            <h4 className="time shimmer-menu stroke animate">
              <span
                className="icons shimmer-menu stroke animate"
                style={{
                  position: "relative",
                  top: "2px",
                  marginRight: "3px",
                }}
              ></span>
              <span className="stroke animate shimmer-small-line"></span>
            </h4>

            <h3 className="stroke animate shimmer-subtitle"></h3>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <div className="menu-main shimmer-menu-main shimmer-menu stroke animate">
        <h2 className="stroke animate shimmer-section-title"></h2>
        <h3 className="items shimmer-menu stroke animate shimmer-subtitle"></h3>

        <div className="menu-main-card-container shimmer-menu stroke animate">
          {/* Repeating shimmer cards */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="menu-card shimmer-menu stroke animate">
              <div className="menu-card-left shimmer-menu stroke animate">
                <h2 className="menu-name shimmer-menu stroke animate"></h2>
                <h3 className="menu-price shimmer-menu stroke animate"></h3>
                <h4 className="menu-description shimmer-menu stroke animate"></h4>
              </div>
              <div className="menu-card-right shimmer-menu stroke animate">
                <img
                  src="https://via.placeholder.com/100?text=..."
                  alt="loading..."
                  className="stroke animate"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center p-6 mt-10">
        <p>© 2025 Foodie. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShimmerMenu;