import Profile from "./components/Profile.jsx";
import ProfileTopbar from "./components/ProfileTopbar.jsx";
import { page } from "../../../constants/index.jsx";

export default function PageHeader() {
  return (
    <div>
      <ProfileTopbar page={page} />
      <Profile pageInfo={page} />
    </div>
  )
}
