import React from "react";

export default function Search({ setQuery }) {
  return (
    <div className="relative">
      <p className="text-xl bold uppercase text-gray-700 mb-2">Search</p>
      <div className="absolute flex items-center ml-2 h-full pb-35 opacity-30">
        <svg
          className="w-4 h-4 fill-current text-primary-gray-dark"
          viewBox="0 0 16 16"
          fill="gray"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
        </svg>
      </div>

      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by firstname, lastname, username, team..."
        className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 focus:ring-0 text-sm focus:border-1"
      />
    </div>
  );
}
