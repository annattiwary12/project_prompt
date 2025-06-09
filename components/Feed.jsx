'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => (
  <div className='mt-16 prompt_layout'>
    {data.map((post) => (
      <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
      />
    ))}
  </div>
);

const Feed = () => {
  const { data: session, status } = useSession();
  const [searchText, setSearchText] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);

    const regex = new RegExp(searchValue, 'i'); // case-insensitive search
    const filtered = allPosts.filter(
      (post) =>
        regex.test(post.prompt) ||
        regex.test(post.tag) ||
        regex.test(post.creator.username)
    );

    setFilteredPosts(filtered);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/post`);
      const data = await response.json();
      setAllPosts(data);
      setFilteredPosts(data); // Default display all
    };

    if (status === 'authenticated') {
      fetchPosts();
    }
  }, [session, status]);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <section className='feed'>
      <form className='relative w-full flex-center mt-5'>
        <input
          type='text'
          placeholder='Search by prompt, tag, or username'
          value={searchText}
          onChange={handleSearchChange}
          className='search_input peer'
        />
      </form>

      {status === 'authenticated' ? (
        <PromptCardList data={filteredPosts} handleTagClick={(tag) => setSearchText(tag)} />
      ) : (
        <p className='text-gray-400 mt-10'>Please sign in to view prompts.</p>
      )}
    </section>
  );
};

export default Feed;
