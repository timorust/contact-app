import Home from '../pages/home/Home'
import Messages from '../pages/messages/Messages'
import Profile from '../pages/profile/Profile'
import Conversation from '../pages/messages/Conversation'
import Friends from '../pages/friends/Friends'
import Auth from '../pages/auth/Auth'

export const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
		auth: true,
	},
	{
		path: '/profile/:id',
		exact: false,
		component: Profile,
		auth: true,
	},
	{
		path: '/messages',
		exact: true,
		component: Messages,
		auth: true,
	},
	{
		path: '/message/:id',
		exact: false,
		component: Conversation,
		auth: true,
	},
	{
		path: '/friends/:id',
		exact: false,
		component: Friends,
		auth: true,
	},
	{
		path: '/auth',
		exact: true,
		component: Auth,
		auth: false,
	},
]
