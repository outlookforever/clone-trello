import { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/dashboard-layout/DashboardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className=''>
			<DashboardLayout>{children}</DashboardLayout>
		</div>
	)
}
