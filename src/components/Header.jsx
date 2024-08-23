import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../constants/app.constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // then register new timer for new searchQuery
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions(searchQuery);
      }
    }, 500);

    // 1st clear the previous timer registered for previous keypress
    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
  return (
    <div className="grid grid-flow-col p-2 fixed w-full bg-white">
      <div className="flex col-span-1">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg"
          alt="hamburger menu"
          className="h-12 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <img
          alt="youtube logo"
          className="h-12 cursor-pointer"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="col-span-10 text-center">
        <div>
          <input
            type="text"
            className="w-2/4 border border-gray-400 p-2.5 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2.5 rounded-r-full bg-gray">
            Search
          </button>
        </div>
        {suggestions.length > 0 && showSuggestions && (
          <div className="absolute left-[31%] bg-white border border-gray-300 shadow-md z-10 mt-1 w-[35%] rounded-lg py-2 text-left">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  className="py-2 px-5 font-semibold hover:bg-gray-100"
                  key={suggestion}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1">
        <img
          alt="user-icon"
          className="h-10 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
        />
        <img
          alt="user-icon"
          className="h-10 ml-8"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
