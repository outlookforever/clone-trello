'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { authService } from '@/services/auth.service'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => mutate(data)

	return (
		<div className='flex min-h-screen'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-[400px] m-auto shadow bg-sidebar rounded-xl p-layout'
			>
				<Heading title='Authorized' />
				<Field
					{...register('email', {
						required: 'Email is required'
					})}
					id='Email'
					label='Email:'
					placeholder='Enter Email'
					extra='mb-4'
					type='email'
				/>
				<Field
					{...register('password', {
						required: 'Password is required'
					})}
					id='Password'
					label='Password:'
					placeholder='Enter Password'
					extra='mb-6'
					type='password'
				/>
				<div className='flex items-center gap-5 justify-center'>
					<Button onClick={() => setIsLoginForm(true)}>Login</Button>
					<Button onClick={() => setIsLoginForm(false)}>Register</Button>
				</div>
			</form>
		</div>
	)
}
