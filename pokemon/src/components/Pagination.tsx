import React from "react";
import { LeftArrow, RightArrow } from "./ArrowsSvg";
type Paginationprops={page: number, onLeftClick:any, onRightClick: any, totalPages: any }

const Pagination = (props:Paginationprops) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        <div className="icon">
          <LeftArrow />
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
        <div className="icon">
          <RightArrow />
        </div>
      </button>
    </div>
  );
};

export default Pagination;