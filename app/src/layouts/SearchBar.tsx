import React, { useEffect } from "react";
import { dateFormat } from "@/lib/utils/dateFormat";
import Fuse from "fuse.js";
import { useRef, useState } from "react";
import { BiRevision } from "react-icons/bi";
export type SearchItem = {
  id: string;
  slug: string;
  data: any;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null,
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = new Fuse(searchList, {
    keys: ["data.title", "data.categories", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    let inputResult = inputVal.length > 2 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);

  return (
    <div>
      <input
        className="form-input w-full mb-8 placeholder:text-light placeholder:text-sm"
        placeholder="検索する"
        type="text"
        name="search"
        value={inputVal}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        ref={inputRef}
      />

      <div>
        {inputVal.length > 1 && (
          <h2 className="text-lg mb-6">
            <span className="text-primary">{inputVal}</span> に関する記事が {searchResults?.length} 件見つかりました
          </h2>
        )}
        {searchResults?.length ? (
          <ul className="row sm:gx-3 gx-2 mb-4">
            {searchResults?.map(({ item }) => (
              <li className="col-12 sm:col-6 mb-6 sm:mb-8">
                <a
                  href={`/posts/${item.slug}`}
                  className="block hover:opacity-75"
                >
                  {item.data.image && (
                    <img className="group-hover:scale-[1.03] w-full mb-4" src={item.data.image} alt={item.data.title} width="445" height="230"/>
                  )}
                  <h2 className="mb-2 text-base font-bold">{item.data.title}</h2>
                  <div className="items-center flex flex-wrap text-xs gap-x-2.5 gap-y-1">
                    <time className="text-[11px] flex flex-wrap gap-x-1 items-center text-light" aria-hidden="true">
                      <BiRevision />
                      <span className="text-[11px]">{dateFormat(item.data.date)}</span>
                    </time>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
