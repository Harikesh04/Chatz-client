import Typography from "../ui/Typography";
import { useEffect, useState } from "react";
import ProfileCard from "./profileCard.jsx";
import moment from "moment";
import Spinner from "../ui/Spinner.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPrivateRooms } from "../../store/features/roomSlice.jsx";
import url_handlers from "../../api-handlers/url-handlers.js";
import request_caller from "../../api-handlers/request-handler.js";

export default function Secret() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const profile = useSelector((state) => state.auth.profile);
  const privateRooms = useSelector((state) => state.rooms.private);

  function fetchPrivateRooms() {
    setLoading(true);

    request_caller({
      endpoint: `${url_handlers.api.room.fetch_private_rooms}/${profile.googleId}`,
    })
      .then((res) => {
        if (res.success) {
          dispatch(setPrivateRooms(res.data));
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchPrivateRooms();
  }, []);

  const renderSecretRooms = () => {
    return privateRooms.map((room) => {
      const timeFromNow = moment(room.createdAt).fromNow();
      console.log(room);
      return (
        <ProfileCard
          roomid={room.roomid}
          key={room._id}
          name={room.name}
          timeFromNow={timeFromNow}
          url={room.image}
        />
      );
    });
  };

  return (
    <div className="pt-6">
      <Typography type="section-heading" className="font-bold">
        Secret Rooms
      </Typography>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-2 space-y-2 overflow-y-auto max-h-60 scrollbar-hide">
          {privateRooms?.rooms?.length === 0 ? (
            <Typography type="section-description" className="text-center">
              Shh! its secret, create your's
            </Typography>
          ) : (
            renderSecretRooms()
          )}
        </div>
      )}
    </div>
  );
}
