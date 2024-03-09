'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'

export function Settings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData(reset)
	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: data.password || undefined
		})
	}

	return (
		<div className=''>
			<form
				className='w-2/4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-2 gap-10'>
					<div className=''>
						<Field
							id='email'
							label='Email'
							placeholder='Enter Email'
							type='email'
							{...register('email', {
								required: 'Email is required'
							})}
							extra='mb-4'
						/>
						<Field
							id='name'
							label='Name'
							placeholder='Enter Name'
							{...register('name')}
							extra='mb-4'
						/>
						<Field
							id='password'
							label='Password'
							placeholder='Enter Password'
							type='password'
							{...register('password')}
							extra='mb-4'
						/>
					</div>
					<div className=''>
						<Field
							id='workInterval'
							label='Work Interval (min.)'
							placeholder='Enter Work Interval (min.)'
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
						<Field
							id='breakeInterval'
							label='Breake Interval (min.)'
							placeholder='Enter Breake Interval (min.)'
							isNumber
							{...register('breakeInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
						<Field
							id='intervalCount'
							label='Interval count'
							placeholder='Enter Interval Count (max 10)'
							isNumber
							{...register('intervalCount', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
					</div>
				</div>
				<Button
					type='submit'
					disabled={isPending}
				>
					Save
				</Button>
			</form>
		</div>
	)
}
