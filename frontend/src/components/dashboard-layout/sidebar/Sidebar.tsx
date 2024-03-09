import { Footer } from './Footer'
import { Logo } from './Logo'
import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<div className='p-3 relative'>
				<Logo />
				<LogoutButton />
				{MENU.map(item => (
					<MenuItem
						key={item.link}
						item={item}
					/>
				))}
			</div>
			<Footer />
		</aside>
	)
}
