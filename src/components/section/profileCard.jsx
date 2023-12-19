import { useNavigate } from "react-router-dom";
import Typography from "../ui/Typography";

export default function ProfileCard({
  name,
  url = "/assets/images/avatar2.jpg",
  timeFromNow,
  roomid,
  ...props
}) {
  if (!url.startsWith("http")) {
    url = "/assets/images/avatar2.jpg";
  }
  const navigate = useNavigate();
  const shiftToRoom = () => {
    navigate(`/room/${roomid}`);
  };
  return (
    <div {...props} onClick={shiftToRoom} className="flex items-center">
      <img
        className="object-cover w-12 h-12 mr-3 rounded-full"
        src={url}
        alt="avatar"
      ></img>
      <div>
        <Typography type="profile-heading">{name}</Typography>
        <Typography className="text-xs">Created {timeFromNow}</Typography>
      </div>
    </div>
  );
}
