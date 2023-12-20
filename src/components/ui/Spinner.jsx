import { ClipLoader } from "react-spinners";

const Spinner = ({ className }) => {
  return (
    <div className={`flex justify-center w-full ${className}`}>
      <ClipLoader />
    </div>
  );
};

export default Spinner;
