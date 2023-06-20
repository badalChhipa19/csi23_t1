import "./searchBox.css";

const searchBox = function () {
  return (
    <div className="search__box">
      <input type="text" className="input" placeholder="Type Here..." />
      <input type="submit" className="btn  input__btn" value="Continue" />
    </div>
  );
};

export default searchBox;
