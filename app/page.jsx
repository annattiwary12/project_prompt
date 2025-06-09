

import Feed from '@components/Feed';

const Home = () => (
  <main className='w-full flex justify-center items-center flex-col'>
    <h1 className=" font-satoshi  head_text text-center">
      Discover & Share
      <br className='max-md:hidden' />
      <span className="orange_gradient text-center"> AI-Powered Prompts</span>
    </h1>



    <p className=" font-inter  desc text-center">
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>
    <Feed />
  </main>
);

export default Home;
