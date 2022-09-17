import { Link, useLocation } from "react-router-dom";

const Tab = ({ title, url }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={url}
      className={`px-6 py-2 text-lg font-bold text-purple-100 transition duration-500 ease-in-out hover:text-purple-300 tracking-wide ${
        pathname === url && "border-b-4 border-b-purple-300"
      }`}
    >
      {title}
    </Link>
  );
};

export default Tab;
