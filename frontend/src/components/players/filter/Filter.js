import { React, useState } from "react";
import { motion } from "framer-motion";

export default function Filter({
  roles,
  nationalities,
  fetchPlayers,
  setOrdering,
  setMinAge,
  setMaxAge,
}) {
  const activeClass = "";
  const inactiveClass = " opacity-25 bg-gray-400";

  const toggleClass = (event, button) => {
    event.preventDefault();
    var element = event.target;
    if (
      event.target.tagName.toLowerCase() === "img" ||
      event.target.tagName.toLowerCase() === "span"
    ) {
      element = event.target.parentNode;
    }

    button.active = !button.active;
    if (button.active) {
      element.className = element.className.replace(inactiveClass, "");
      element.className += activeClass;
    } else {
      if (
        roles.every((role) => !role.active) &&
        nationalities.every((nation) => !nation.active)
      ) {
        button.active = !button.active;
        return;
      }
      element.className += inactiveClass;
      element.className = element.className.replace(activeClass, "");
    }
    fetchPlayers();
  };

  const checkAgeConstraint = (e) => {
    const maxAge = parseInt(document.getElementById("max-age").value);
    const minAge = parseInt(document.getElementById("min-age").value);
    const targetId = e.target.id;
    const value = parseInt(e.target.value);

    if (targetId === "min-age") {
      if (value >= 9 && value < 100) {
        setMinAge(`&min_age=${e.target.value}`);
        return;
      }
      if (value === "") {
        setMinAge("");
        return;
      }
    }

    if (targetId === "max-age") {
      if (value > 9 && value <= 100) {
        if (maxAge > minAge || Number.isNaN(minAge)) {
          setMaxAge(`&max_age=${e.target.value}`);
          return;
        }
      }
      if (value === "") {
        setMaxAge("");
        return;
      }
    }
  };

  return (
    <div className="overflow-hidden mt-4 border-gray-200 rounded">
      <div className="flex justify-between">
        <h1 className="flex items-center text-xl bold uppercase text-gray-700">
          <span>Filter players</span>
        </h1>
        <div className="flex gap-4 justify-end">
          <motion.div
            initial={{ y: -600 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center -space-x-px text-xs rounded-md"
          >
            <label className="relative" forhtml="sort">
              <span className="sr-only"> Sort </span>

              <select
                onChange={(e) => setOrdering(`&ordering=${e.target.value}`)}
                className="rounded-xl py-3 pl-2 pr-6 text-xs font-medium border border-gray-200 rounded-l-md hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 focus:ring-0"
                id="sort"
                name="sort"
              >
                <option value="">Sort By</option>
                <option value="first_name">Firstname, Asc</option>
                <option value="-first_name">Firstname, Desc</option>
                <option value="last_name">Lastname, Asc</option>
                <option value="-last_name">Lastname, Desc</option>
                <option value="username">Username, Asc</option>
                <option value="-username">Username, Desc</option>
                <option value="teams__team__name">Team, Asc</option>
                <option value="-teams__team__name">Team, Desc</option>
                <option value="-date_of_birth">Age, Asc</option>
                <option value="date_of_birth">Age, Desc</option>
              </select>
            </label>
          </motion.div>
          <motion.div
            initial={{ y: -600 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-4 justify-center items-center"
          >
            <input
              type="number"
              id="min-age"
              placeholder="Minimum age"
              onChange={(e) => checkAgeConstraint(e)}
              min="9"
              maximum="99"
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:outline-none focus:border-1 focus:border-indigo-600 focus:z-10 hover:bg-gray-50 focus:ring-0  text-sm"
            />
          </motion.div>
          <motion.div
            initial={{ y: -600 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex gap-4 justify-center items-center"
          >
            <input
              type="number"
              id="max-age"
              placeholder="Maximum age"
              onChange={(e) => checkAgeConstraint(e)}
              min="10"
              maximum="100"
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:outline-none focus:border-1 focus:border-indigo-600 focus:z-10 hover:bg-gray-50 focus:ring-0  text-sm"
            />
          </motion.div>
        </div>
      </div>
      <form action="" className="border-t border-gray-200 lg:border-t-0">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex items-center justify-between mb-4 mt-4"
        >
          {roles.map((role) => {
            return (
              <button
                key={role.id}
                onClick={(event) => {
                  toggleClass(event, role);
                }}
                className={`border border-gray-400 rounded-xl py-1 px-3 hover:bg-gray-500 hover:opacity-75 cursor-pointer focus:outline-none active:outline-none${
                  role.active ? activeClass : inactiveClass
                }`}
              >
                <span className="font-medium">{role.name}</span>
              </button>
            );
          })}
          {nationalities.map((nationality) => {
            return (
              <button
                key={nationality.id}
                onClick={(event) => toggleClass(event, nationality)}
                className={`border border-gray-400 rounded-xl py-1 px-3 hover:bg-gray-500 hover:opacity-75 cursor-pointer focus:outline-none active:outline-none ${
                  nationality.active ? activeClass : inactiveClass
                }`}
              >
                <img
                  className="w-8 h-6 rounded"
                  title={nationality.name}
                  alt={nationality.name}
                  src={nationality.flag}
                />
              </button>
            );
          })}
        </motion.div>
      </form>
    </div>
  );
}
