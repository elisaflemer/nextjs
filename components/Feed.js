"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ( {data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map( (prompt) => (
        <PromptCard key={prompt._id} post={prompt} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]);

  const handleSearchChange = (e) => {
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPrompts(data);
    }
    fetchPosts()
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text" placeholder="Search for a tag or username" className="search_input peer" value={searchText} onChange={handleSearchChange}/>
      </form>
      <PromptCardList
        data={prompts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed