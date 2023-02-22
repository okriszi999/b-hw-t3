import dayjs from "dayjs";
import { useSession } from "next-auth/react";
require("dayjs/locale/hu");
import { useEffect, useMemo, useState } from "react";
export function Navigation() {
  const { data } = useSession();

  dayjs.locale("hu");
  const dateFormat = "YYYY.MM.DD";
  const [date, setTime] = useState(dayjs().format(dateFormat));

  return (
    <nav className="navbar mx-auto max-w-7xl bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="flex justify-between">
                <span>Redőnyök</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="flex justify-between">
                <span>Világítás</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="flex justify-between">
                <span>Hőmérséklet</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className=" flex items-end gap-1 text-xl normal-case">
          Smart HÖME{" "}
          {data?.user ? (
            <span className="text-xs">for {data.user.name?.split(" ")[0]}</span>
          ) : (
            ""
          )}
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn w-full">
            {date}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-full bg-base-100 p-2 shadow"
          ></ul>
        </div>
      </div>
    </nav>
  );
}
