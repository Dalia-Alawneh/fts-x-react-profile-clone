import { Bell, Bookmark, BriefcaseBusiness, CircleEllipsis, House, List, Mail, MessageCircle, Search, UserRound, UsersRound } from "lucide-react";
import reactProfile from './../assets/reactProfile.png';
import reactCover from './../assets/reacr-cover.jpg';
import post1 from './../assets/post1.jpg';
import post2 from './../assets/post2.png';
import userimg from './../assets/user.jpg';

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
export const mobileMenuItems = [
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
    text: 'Communities',
    icon: <UsersRound />,
  },
]

export const user = {
  img: null,
  name: "Dalia Alawneh",
  username: '@dalia_alaw15161',
  isPrivate: true,
}

export const page = {
  name: "React",
  postsCount: 2697,
  isVerified: true,
  username: '@reactjs',
  description: 'The library for web and native user interfaces',
  website: 'https://react.dev/',
  linkName: 'react.dev',
  joinedAt: 'July 2013',
  following: 255,
  followers: 804800,
  followedBy: [],
  profileImage: reactProfile,
  coverImage: reactCover,
}

export const posts = [
  {
    id: 1,
    date: 'Mar 28',
    description: 'React 19.1 has just been released! Check out the latest updates here:',
    postImage: post1,
    poster: page,
    totalReplies: 24,
    retweets: 325,
    likes: 1900,
    views: 171000,
    replies: []
  },
  {
    id: 2,
    date: 'Feb 14',
    description: `Today, we’re deprecating Create React App for new apps, and encouraging existing apps to migrate to a framework.

We’re also providing docs for when a framework isn’t a good fit for your project, or you prefer to start by building a framework.`,
    postImage: post2,
    poster: page,
    totalReplies: 233,
    retweets: 1500,
    likes: 6000,
    views: 1000000,
    replies: [
      {
        id: 1_2,
        date: 'Feb 15',
        description: `Why you don’t recommend vite_js?`,
        totalReplies: 120,
        retweets: 305,
        likes: 500,
        views: 21000,
        poster: {
          username: '@victorbayas',
          name: 'Victor Bayas',
          profileImage: userimg,
          isVerified: false,
        }
      },

    ]
  },
  {
    id: 3,
    date: 'Feb 14',
    description: `Although Create React App makes it easy to get started, there are several limitations that make it difficult to build high performant production apps. 
    Most production apps need solutions to problems like routing, data fetching, and code splitting.`,
    postImage: post2,
    poster: page,
    totalReplies: 20,
    retweets: 0,
    likes: 400,
    views: 1000,
    replies: []
  },
]

export const whoToFollow = [
  {
    
  }
]