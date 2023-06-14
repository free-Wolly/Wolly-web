import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import { useRouter } from "next/router";
import { BlogsDataInterface } from "../../types/blog/interfaces";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  data: BlogsDataInterface | undefined;
}

export default function Pagination({ page, setPage, data }: PaginationProps) {
  const router = useRouter();
  const totalPages = data?.blogs.meta?.pagination.pageCount;
  const nextPage = () => {
    if (page === totalPages) return;
    setPage(page + 1);
    router.push(`/blog?page=${page + 1}`);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
    router.push(`/blog?page=${page - 1}`);
  };

  const generatePageDivs = totalPages
    ? Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <div
          key={pageNumber}
          className={`relative inline-flex items-center ${
            pageNumber === page
              ? "border bg-indigo-50 text-indigo-600"
              : "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
          } cursor-pointer px-4 py-2 text-sm font-medium`}
          onClick={() => {
            setPage(pageNumber);
            router.push(`/blog?page=${pageNumber}`);
          }}
        >
          {pageNumber}
        </div>
      ))
    : [];

  if (totalPages)
    return (
      <div className="items-between flex flex-col justify-center bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <div
            onClick={prevPage}
            className="relative inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </div>
          <div
            onClick={nextPage}
            className="relative ml-3 inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
          <div>
            <nav
              className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <div
                onClick={prevPage}
                className="relative inline-flex cursor-pointer items-center rounded-l-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              {generatePageDivs}
              <div
                onClick={nextPage}
                className="relative inline-flex cursor-pointer items-center rounded-r-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  return null;
}
