import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse rounded-sm">
      <div className="min-h-[250px] bg-gray-300 rounded-sm"></div>
      <span className="bg-gray-300 h-6 mt-4 rounded-sm"></span>
      <span className="bg-gray-300 h-4 mt-4 rounded-sm"></span>
    </div>
  );
};

export default ProductSkeleton;
