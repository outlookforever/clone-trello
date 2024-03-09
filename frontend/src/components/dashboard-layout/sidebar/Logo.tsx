import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

export function Logo() {
	return (
		<div className='pr-2  border-b border-b-border'>
			<Link
				href={'/'}
				className='flex items-center gap-2.5 p-layout'
			>
				<GanttChartSquare
					color={COLORS.primary}
					size={30}
				/>
				<span className='text-2xl font-bold relative'>
					Planner
					<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
						beta
					</span>
				</span>
			</Link>
		</div>
	)
}
