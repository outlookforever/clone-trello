'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { authService } from '@/services/auth.service'

export function LogoutButton() {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	return (
		<button
			className='opacity-20 hover:opacity-100 transition-opacity duration-300 w-full pt-2'
			onClick={() => mutate()}
		>
			<span className='text-white text-xl flex items-center ml-6 gap-2.5'>
				<LogOut
					size={20}
					// className='inline-block w-full'
				/>{' '}
				Logout
			</span>
		</button>
	)
}
