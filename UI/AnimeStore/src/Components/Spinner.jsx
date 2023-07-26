function Spinner() {
  return (
    <div className="loadingSpinnerContainer fixed t-0 l-0 r-0 b-0 bg-[rgba(0,0,0,0.5)] z-[5000] flex justify-center items-center">
      <div
        className="loadingSpinner w-16 h-16 border-solid border-[8px] rounded-[50%]  "
        style={{
          borderColor: '#000 transparent #555 transparent',
          Animation: 'spin 1.2s linear infinite',
        }}
      ></div>
    </div>
  );
}

export default Spinner;
