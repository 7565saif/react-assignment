import "./Topbar.css";

function topbar() {
  return (
    //   <div className="topbar">
    <header className="topbar">
      <a class="logo">EDYODA</a>
      <a>
        <button class="button">
          Go To Main <br />
          Website
        </button>
        <a class="blog">
          <p class="aboutblog">
            EdYoda is free learning and knowledge <br />
            sharing platform for techies
          </p>
        </a>
      </a>
      <div class="Stories">Stories</div>
    </header>
    /* </div> */
  );
}

export default topbar;
