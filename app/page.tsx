import './globals.css';
import NewItemDialog from '@/components/new-item-dialog';

export default function Home() {
	return (
		<main className='mx-[10%] my-10'>
			<h1 className='text-2xl my-2'>Awesome Todo</h1>
			<NewItemDialog />
		</main>
	);
}
