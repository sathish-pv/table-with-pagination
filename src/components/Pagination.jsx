import React from 'react';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className='pagination-dropdown'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        &lt;
      </button>
      
      <select
        value={currentPage}
        onChange={(e) => onPageChange(Number(e.target.value))}
        aria-label="Select page"
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        &gt;
      </button>
    </div>
  );
};