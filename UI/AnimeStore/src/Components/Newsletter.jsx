import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  return (
    <div className="con h-[60vh] bg-[#fcf5f5] flex items-center justify-center flex-col w-screen">
      <div className="title text-[70px] mb-5">Newsletter</div>
      <div className="Desc text-2xl font-light mb-5 smx:text-center"></div>
      <div className="inputCont w-1/2 h-10 bg-white flex justify-between border-1 border-solid border-gray-400 smx:w-[80%]">
        <input
          placeholder="Your email"
          className="border-none flex-[8] pl-5  "
        />
        <button className="flex-1 border-none bg-teal-300 text-white">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
