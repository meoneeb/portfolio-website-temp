// components/GoBackButton.js
"use client";
const GoBackButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="d-flex justify-content-center align-items-center"
      // style={{ textDecoration: "none", background: "var(--bg-main)", border: "1px solid var(--primary)", borderRadius: 100, minWidth: 48, height: 48}}
      style={{ textDecoration: "none", background: "transparent", border: "none"}}
    >
      <i className="fi fi-br-arrow-left"></i><p style={{margin: 10,fontWeight: 600}}>BACK</p>
    </button>
  );
};

export default GoBackButton;
