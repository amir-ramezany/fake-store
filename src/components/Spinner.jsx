import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px  auto",
};

const Spinner = () => {
  return <ClipLoader color="#334155" cssOverride={override} size={150} />;
};

export default Spinner;
