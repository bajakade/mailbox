interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pager = ({ currentPage, totalPages, onPageChange }: Props) => {
  return (
    <div className="flex justify-center space-x-2">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className="px-4 py-2 border bg-white"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from(Array(totalPages).keys()).map((pageIndex) => (
        <button
          key={pageIndex}
          onClick={() => onPageChange(pageIndex + 1)}
          className={`px-4 py-2 border ${
            pageIndex + 1 === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white"
          }`}
        >
          {pageIndex + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="px-4 py-2 border bg-white"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
