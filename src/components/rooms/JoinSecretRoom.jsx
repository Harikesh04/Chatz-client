import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Modal from "../ui/Modal.jsx";
import TextInput from "../ui/TextInput.jsx";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function JoinSecretRoom({ setvalue }) {
  const [secretCode, setSecretCode] = useState("");
  const navigate = useNavigate();

  const JoinRoomHandler = () => {
    if (secretCode.trim() == "") {
      toast.error("Please enter a secret code!");

      return;
    } else if (secretCode.trim().length < 16) {
      toast.error("Please enter a correct secret code!");
      return;
    }
    navigate(`/room/${secretCode}`);
  };

  return (
    <Modal title="We Chat Secret Rooms">
      <TextInput
        value={secretCode}
        setValue={setSecretCode}
        type="primary"
        label="Enter Your Secret Room ID"
      />
      <div className="float-right space-x-2">
        <Button onClick={JoinRoomHandler} btnType="primary" className="mt-2">
          Submit
        </Button>
        <Button btnType="danger" onClick={() => setvalue(false)}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
