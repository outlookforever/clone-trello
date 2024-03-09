import Link from 'next/link'

import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div className=''>
			<Link
				className='flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors hover:bg-border rounded-lg'
				href={item.link}
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
