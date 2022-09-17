import LinkIcon from "@heroicons/react/24/solid/LinkIcon";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import FacebookShareButton from "react-share/lib/FacebookShareButton";
import FacebookIcon from "react-share/lib/FacebookIcon";
import WhatsappShareButton from "react-share/lib/WhatsappShareButton";
import WhatsappIcon from "react-share/lib/WhatsappIcon";
import TwitterShareButton from "react-share/lib/TwitterShareButton";
import TwitterIcon from "react-share/lib/TwitterIcon";
import PinterestShareButton from "react-share/lib/PinterestShareButton";
import PinterestIcon from "react-share/lib/PinterestIcon";

import { useState } from "react";

const Dashboard = () => {
  const [copyText, setCopyText] = useState("Copy Link");

  const URL = "https://tailwindcss.com/";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(URL);

    setCopyText("Copied");

    setTimeout(() => {
      setCopyText("Copy Link");
    }, 2000);
  };

  return (
    <div className="text-center">
      <h2 className="text-purple-200 text-2xl">What others think of me...</h2>

      <div className="animate-bounce bg-purple-200 mx-auto mt-3 p-2 w-10 h-10 ring-1 ring-purple-500 shadow-lg rounded-full flex items-center justify-center">
        <ArrowDownIcon className="h-6 w-6 text-purple-900" />
      </div>

      <section className="bg-purple-200 shadow-lg shadow-purple-500/70 px-6 py-6 rounded-2xl mt-6">
        <header className="text-2xl font-bold text-purple-900 mt-3">
          <span className="shadow-lg shadow-purple-900/50 px-6 py-3 rounded-full">
            1
          </span>
        </header>
        <button
          onClick={copyToClipboard}
          className="mt-6 px-6 py-3 bg-purple-900 tracking-wider font-bold text-purple-100 rounded-full shadow-inner drop-shadow-2xl shadow-purple-600 hover:bg-purple-800 active:drop-shadow-md"
        >
          <div className="flex gap-3">
            <LinkIcon className="h-6 w-6 text-purple-300" />
            {copyText}
          </div>
        </button>
      </section>

      <section className="bg-purple-200 shadow-lg shadow-purple-500/70 px-6 py-6 rounded-2xl mt-6">
        <header className="text-2xl font-bold text-purple-900 mt-3">
          <span className="shadow-lg shadow-purple-900/50 px-6 py-3 rounded-full">
            2
          </span>
        </header>

        <div className="mt-6 text-purple-900 text-xl">
          Share your link on<strong className="block">Social Media</strong>
        </div>
        <div className="flex justify-center gap-2 mt-3">
          <FacebookShareButton url={URL}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>

          <WhatsappShareButton url={URL}>
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>

          <TwitterShareButton url={URL}>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>

          <PinterestShareButton url={URL}>
            <PinterestIcon size={40} round={true} />
          </PinterestShareButton>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
