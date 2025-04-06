import { Bell, Bookmark, BriefcaseBusiness, CircleEllipsis, House, List, Mail, MessageCircle, Search, UserRound, UsersRound } from "lucide-react";
import reactProfile from './../assets/reactProfile.png';
import reactCover from './../assets/reacr-cover.jpg';

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

export const page ={
  name: "React",
  postsCount: 2697,
  isVerified: true,
  username: '@reactjs',
  description: 'The library for web and native user interfaces',
  website: 'https://react.dev/',
  joinedAt: 'July 2013',
  following: 255,
  followers: 804800,
  followedBy: [],
  profileImage: reactProfile,
  coverImage: reactCover,
}