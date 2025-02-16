import { inter } from '@/app/ui/fonts'
import { StarIcon } from '@heroicons/react/20/solid'

export default function AcmeLogo() {
	return (
		<div
			className={`${inter.className} flex flex-row items-center leading-none text-white`}
		>
			<StarIcon className='h-12 w-12' />
		</div>
	)
}
