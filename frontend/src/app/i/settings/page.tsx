import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Settings } from './Setting'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE
}

export default function Page() {
	return (
		<div className=''>
			<Heading title='Settings' />
			<Settings />
		</div>
	)
}
