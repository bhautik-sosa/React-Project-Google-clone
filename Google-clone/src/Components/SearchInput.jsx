import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import MicIcon from "../assets/mic.svg";
import imageIcon from "../assets/image.svg";
import {useNavigate, useParams } from 'react-router-dom'

export default function () {

  const {query} = useParams();
  const [searchQuery, setSearchQuery] = React.useState(query || "");
  const navigate = useNavigate();

  function searchQueryHandler(event){
    if(event.key === "Enter" && searchQuery.length > 0 ){
        navigate(`${searchQuery}/${1}`)
    }
  }

  return (
    <div className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfele5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus:focus-within:shadow-c focus-within:border-0">
      <AiOutlineSearch size={18} col="#9aa0a6" />

      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value) }
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-black/[0.87]"
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose size={24} color="#70757a" className="cursor-pointer" onClick={(e) => setSearchQuery("") }/>
        )}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="Mic" />
        <img className="h-6 w-6 cursor-pointer" src={imageIcon} alt="Mic" />
      </div>
    </div>
  );
}
