
/* Code generated with AutoHTML Plugin for Figma */

import Link from "next/link";
import Button from "./button";


export const ShareLink = ({ href,...props }) => {
    return (
        <Link href={href}>
        <Button
            className="rounded pt-5 pr-0 pb-5 pl-0 flex flex-row gap-3 items-center justify-center  relative text-2xl font-bold cursor-pointer"

        >
            <svg
                className="w-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.1202 15.5228L6.92129 13.2324C6.19135 14.0125 5.15261 14.5 4 14.5C1.79086 14.5 0 12.7091 0 10.5C0 8.29086 1.79086 6.5 4 6.5C5.15255 6.5 6.19125 6.98746 6.92118 7.76746L11.1202 5.47713C11.0417 5.16441 11 4.83707 11 4.5C11 2.29086 12.7909 0.5 15 0.5C17.2091 0.5 19 2.29086 19 4.5C19 6.70914 17.2091 8.5 15 8.5C13.8474 8.5 12.8087 8.01251 12.0787 7.23246L7.87977 9.5228C7.9583 9.8355 8 10.1629 8 10.5C8 10.8371 7.95831 11.1644 7.87981 11.4771L12.0788 13.7675C12.8087 12.9875 13.8474 12.5 15 12.5C17.2091 12.5 19 14.2909 19 16.5C19 18.7091 17.2091 20.5 15 20.5C12.7909 20.5 11 18.7091 11 16.5C11 16.1629 11.0417 15.8355 11.1202 15.5228ZM4 12.5C5.10457 12.5 6 11.6046 6 10.5C6 9.3954 5.10457 8.5 4 8.5C2.89543 8.5 2 9.3954 2 10.5C2 11.6046 2.89543 12.5 4 12.5ZM15 6.5C16.1046 6.5 17 5.60457 17 4.5C17 3.39543 16.1046 2.5 15 2.5C13.8954 2.5 13 3.39543 13 4.5C13 5.60457 13.8954 6.5 15 6.5ZM15 18.5C16.1046 18.5 17 17.6046 17 16.5C17 15.3954 16.1046 14.5 15 14.5C13.8954 14.5 13 15.3954 13 16.5C13 17.6046 13.8954 18.5 15 18.5Z"
                    fill="white"
                />
            </svg>

            <div
                className="text-white"
            >
                Link teilen
            </div>
        </Button>
        </Link>
    );
};

export const ShowImages = ({ href,...props }) => {
    return <Link href={href}>
        <Button className="rounded pt-5 pr-0 pb-5 pl-0 flex flex-row gap-3 items-center justify-center  relative text-2xl font-bold cursor-pointer">



                <svg
                    className="w-8"
                    style={{}}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 13C18.3221 13 16.7514 13.4592 15.4068 14.2587C16.5908 15.6438 17.5269 17.2471 18.1465 19H20V13ZM16.0037 19C14.0446 14.3021 9.4079 11 4 11V19H16.0037ZM4 9C7.82914 9 11.3232 10.4348 13.9738 12.7961C15.7047 11.6605 17.7752 11 20 11V3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H6V1H8V5H4V9ZM18 1V5H10V3H16V1H18ZM16.5 10C15.6716 10 15 9.32843 15 8.5C15 7.67157 15.6716 7 16.5 7C17.3284 7 18 7.67157 18 8.5C18 9.32843 17.3284 10 16.5 10Z"
                        fill="white"
                    />
                </svg>
                <div
                    className="text-white"
                    style={{ font: "700 19px 'Inter', sans-serif" }}
                >
                    Anzeigen
                </div>

        </Button>      </Link>
    }
