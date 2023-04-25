import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  path: string;
};

const Redirect: React.FC<Props> = ({ path }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(path);
  }, [path]);
  return null;
};

export default Redirect;
