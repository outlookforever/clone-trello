import { LoaderIcon } from 'lucide-react'

export function Loader() {
	return (
		<div className='flex items-center justify-center'>
			<LoaderIcon className='w-5 h-5 animate-spin text-white' />
		</div>
	)
}
