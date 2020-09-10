import React from "react";

const Content = ({ styles }) => {
  const dummyPost = {
    title: `Here's a blog post title`,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  /* Its the first time i see this fill used like this, its not difficult to understand
  that the goal is to fill the "container" with the 20 paragraphs repeating each other .

  So here you are telling that you want to fill the content with 5 post from the unique post in the dummyPost
   const posts = Array(5).fill(dummyPost);

  so the fill does:  
  The fill() method fills the specified elements in an array with a static value.
  https://www.w3schools.com/JSREF/jsref_fill.asp

  I am really looking forward to see the content with a json file, where each paragraph will
  have an ID and a different text or info


  */

  const posts = Array(20).fill(dummyPost);

  const contentStyle = {
    backgroundColor: styles.reblast(),
    // the distance from the top to the first paragraph
    paddingTop: styles.topBarHeight + 60,
    //
    paddingRight: 40,
    paddingBottom: styles.footerMenuHeight + 20,
    paddingLeft: 40,
  };

  return (
    <div style={contentStyle}>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 50 }}>
            <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;

/*
orriginal


import React from "react";

const Content = ({ styles }) => {
  const dummyPost = {
    id:"0",
    title: `Here's a blog post title`,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.",
  };

  const posts = Array(20).fill(dummyPost);

  const contentStyle = {
    backgroundColor: styles.reblast(),
    // the distance from the top to the first paragraph
    paddingTop: styles.topBarHeight + 60,
    //
    paddingRight: 40,
    paddingBottom: styles.footerMenuHeight + 20,
    paddingLeft: 40,
  };

  return (
    <div style={contentStyle}>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;





 */
