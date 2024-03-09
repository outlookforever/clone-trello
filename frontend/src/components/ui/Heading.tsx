interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	return (
		<div>
			<h1 className='font-medium text-3xl'>{title}</h1>
			<div className='bg-border h-0.5 my-3 w-full'></div>
		</div>
	)
}
