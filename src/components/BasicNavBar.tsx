import { Link } from "react-router-dom";

const BasicNavBar: React.FC = () => {
  return (
    <nav>
      {" "}
      <ul>
        {" "}
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/about">About</Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/services">Services</Link>{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  );
};
export default BasicNavBar;