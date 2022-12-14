import navigateToSignup from "../navigation";


function Landing() {
  return (
    <div className="landing-app">
      <h1 className="landing-title">MusVie</h1>
      <div className="landing-desc">
        <p className="landing-desc-text">
          A music and movie recommendations site based on your favorite genres.
          Get all music and movies tailored to your taste!! Click the button to
          get started! Woohoo!!
        </p>
      </div>
      <div className="landing-btn" onClick={navigateToSignup()}>Get started</div>
    </div>
  );
}

export default Landing;
