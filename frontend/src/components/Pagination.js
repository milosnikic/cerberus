import React from 'react'

export default function Pagination() {
    return (
        <ol className="flex justify-center text-xs font-medium gap-1 mt-4 pb-4">
            <li>
                <a
                    href="/?page=1"
                    className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </li>

            <li>
                <a
                    href="/?page=1"
                    className="inline-flex items-center justify-center w-8 h-8 text-center border border-gray-100 rounded leading-8K"
                >
                    1
                </a>
            </li>

            <li
                className="inline-flex items-center justify-center w-8 h-8 text-center text-white bg-gray-500 border-gray-500 rounded leading-8"
            >
                2
            </li>

            <li>
                <a
                    href="/?page=3"
                    className="inline-flex items-center justify-center w-8 h-8 text-center border border-gray-100 rounded leading-8"
                >
                    3
                </a>
            </li>

            <li>
                <a
                    href="/?page=4"
                    className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded leading-8"
                >
                    4
                </a>
            </li>

            <li>
                <a
                    href="/?page=3"
                    className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </li>
        </ol>
    )
}
