import { Bell, Bookmark, BriefcaseBusiness, CircleEllipsis, House, List, Mail, MessageCircle, Search, UserRound, UsersRound } from "lucide-react";

export const navLinks = [
  {
    text: 'Home',
    icon: <House />,
  },
  {
    text: 'Explore',
    icon: <Search />,
  },
  {
    text: 'Notifications',
    icon: <Bell />,
  },
  {
    text: 'Messages',
    icon: <Mail />,
  },
  {
    text: 'Gork',
    icon: <MessageCircle />,
  },
  {
    text: 'Lists',
    icon: <List />,
  },
  {
    text: 'Bookmarks',
    icon: <Bookmark />,
  },
  {
    text: 'Jobs',
    icon: <BriefcaseBusiness />,
  },
  {
    text: 'Communities',
    icon: <UsersRound />,
  },
  {
    text: 'Profile',
    icon: <UserRound />,
  },
  {
    text: 'More',
    icon: <CircleEllipsis />,
  }
]

export const user ={
  img: null,
  name: "Dalia Alawneh",
  username: '@dalia_alaw15161',
  isPrivate: true,
}