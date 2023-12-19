import Modal from "../ui/Modal";
import TextRadio from "../ui/TextRadio.jsx";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import request_caller from "../../api-handlers/request-handler.js";
import url_handlers from "../../api-handlers/url-handlers.js";
import {
  addPrivateRoom,
  addPublicRoom,
} from "../../store/features/roomSlice.jsx";

export default function CreateRoom({ setvalue }) {
  const id = useMemo(() => uuidv4(), []);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [publicRoomType, setPublicRoomType] = useState(true);


  const CreateRoomHandler = async () => {
    setLoading(true);
    const roomid = id;
    const owner = user.profile.googleId;
    const type = publicRoomType ? "public" : "private";
    const image = user.profile.imageUrl;
    const name = `${user.profile.name}'s Room`;
    const data = {
      roomid,
      owner,
      type,
      image,
      name,
    };
    request_caller({
      endpoint: url_handlers.api.room.create,
      data,
    })
      .then((res) => {
        if (res.success) {
          {
            publicRoomType && dispatch(addPublicRoom(res.data));
          }
          {
            !publicRoomType && dispatch(addPrivateRoom(res.data));
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
        setvalue(false);
      });
  };

  return (
    <Modal title="Welcome to the Creation of Room">
      <Typography type="section-heading">
        Hurray!! your room is ready to share{" "}
        <span className="text-blue-500 ">{id}</span> You are about to create
        your wechat room, do you want to make it public or Private
      </Typography>
      <div className="py-2">
        <TextRadio
          onClick={() => setPublicRoomType(true)}
          selected={publicRoomType ? "true" : ""}
        >
          Public
        </TextRadio>
        <TextRadio
          onClick={() => setPublicRoomType(false)}
          selected={!publicRoomType ? "true" : ""}
        >
          Private
        </TextRadio>
      </div>
      <div className="float-right space-x-2">
        <Button onClick={CreateRoomHandler} loading={loading} btnType="primary" className="mt-2">
          Submit
        </Button>
        <Button onClick={() => setvalue(false)} btnType="danger">
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
