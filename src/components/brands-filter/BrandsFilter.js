import React from "react";

const BrandsFilter = ({
  brands,
  selectedModels,
  setSelectedModels,
  clearSelectedBrands,
  clearSearchValue,
}) => {
  return (
    <div className="brands-container">
      <small className="small">Filtra por modelos</small>

      <div
        className={`brand ${selectedModels.length === 0 && "brand-selected"}`}
        onClick={clearSelectedBrands}
      >
        <small>Todos</small>
      </div>

      {brands?.map((brand, i) => {
        const onSelectBrand = () => {
          clearSearchValue();
          if (selectedModels.includes(brand)) {
            setSelectedModels(selectedModels.filter((s) => s !== brand));
          } else {
            setSelectedModels(selectedModels.concat(brand));
          }
        };

        const isSelected = selectedModels.includes(brand);

        return (
          <div
            key={i}
            className={`brand ${isSelected && "brand-selected"}`}
            onClick={onSelectBrand}
          >
            <small>{brand}</small>
          </div>
        );
      })}
    </div>
  );
};

export default BrandsFilter;
