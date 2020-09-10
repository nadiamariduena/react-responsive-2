import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // we’ll just pass the styles as props to keep things easy. like so :    <TopBar styles={styles} />
    const styles = {
      /*


      I just recently started using functions (e.g. (opacity = 1) => `rgba(255, 255, 255, ${opacity})`) 
      to manage my app’s main colors and their opacities, simply because I got super frustrated copying 
      and pasting or memorizing them with inline styles. Sure I could take advantage of 
      something like SCSS of Less, but it’s been a great help with the JavaScript + inline styles approach.

      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      
      
      */
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      funky: () => `rgba(195, 180, 197, 1)`,
      reblast: () => `rgb(255, 230, 162)`,
      // works also like that :  funky: () => `#f0d800`,
      // works also like that :  funky: () => `hsl(54, 100%, 47%)`,
      // works also like that :  funky: () => `rgba(195, 180, 197, 1)`,
      topBarHeight: 50,
      footerMenuHeight: 50,
    };

    /*   We have an array of menuItems:  const menuItems
    
    We have an array of menuItems that will be displayed in the FooterMenu. Why keep them 
    in App.js? Because we’ll use the same array in the sidebar at larger screen sizes!
    
    
    */
    const menuItems = [
      { link: `Follow:`, text: "Item 1" },
      { link: `facebook`, text: "Item 2" },
      { link: `twitter`, text: "Item 3" },
      { link: `instagram`, text: "Item 4" },
      { link: `pinterest`, text: "Item 5" },
    ];
    // go to line 29 in FooterMenu.js  if you want to change something here
    return (
      <div
        // We created a styles object that will contain the main styling properties for our app.
        style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* 
        In this tutorial, we’ll just pass the styles as props to keep things easy. A better way could be 
        to write a higher order component (HOC) or keep track of styles in a Redux store.
        
        
        */}
        <TopBar styles={styles} />
        <Content styles={styles} />
        <FooterMenu menuItems={menuItems} styles={styles} />
      </div>
    );
  }
}

export default App;
