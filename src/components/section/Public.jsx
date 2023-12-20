import Typography from "../ui/Typography";
import { useEffect, useState } from "react";
import ProfileCard from "./profileCard.jsx";
import moment from "moment";
import Spinner from "../ui/Spinner.jsx";
import { useDispatch, useSelector } from "react-redux";
import request_caller from "../../api-handlers/request-handler.js";
import url_handlers from "../../api-handlers/url-handlers.js";
import { setPublicRooms } from "../../store/features/roomSlice.jsx";
import { toast } from "react-hot-toast";


export default function Secret() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  const publicRooms = useSelector((state) => state.rooms.public);

  function fetchPublicRooms() {
    setLoading(true);
    request_caller({ endpoint: url_handlers.api.room.fetch_public_rooms })
      .then((res) => {
        if (res.success) {
          dispatch(setPublicRooms(res.data));
        }
      })

      .catch((err) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
        setDataFetched(true);
      });
  }

  useEffect(() => {
    if (!dataFetched && (!publicRooms || publicRooms.length === 0)) {
      fetchPublicRooms();

    }
    
  }, []);

  const renderPublicRooms = () => {
    return publicRooms?.map((room) => {
      const timeFromNow = moment(room.createdAt).fromNow();
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
    <div className="pt-6  min-h-[30%] h-full w-full">
      <Typography type="section-heading" className="font-bold">
        Public Rooms
      </Typography>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-2 space-y-2  h-full  overflow-y-auto scrollbar-hide">
          {publicRooms?.length === 0 ? (
            <Typography type="section-description" className="text-center">
              Oopss, We don't have public rooms for now please create some
            </Typography>
          ) : (
            renderPublicRooms()
          )}
        </div>
      )}
    </div>
  );
}
