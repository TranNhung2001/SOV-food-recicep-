import React from "react";

const FilterComponent = () => {
  return (
    <>
      <div>
        <div className="treding-title">
          <h1>Xu hướng</h1>
          <select>
            <option value="">Sắp xếp theo lượt xem</option>
            <option value="">Sắp xếp theo lượt thích</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
