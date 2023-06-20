import TopNav from "./topNav.component";
import SearchBox from "./searchBox.component";

// StyleSheet
import "./../base.css";
import "./hero.css";

const hero = () => {
  return (
    <header className="hero">
      <TopNav />
      <div className="hero__content">
        <h1 className="heading__primary">This is main heading for this page</h1>
        <p className="hero__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <SearchBox />
      </div>
    </header>
  );
};

export default hero;
