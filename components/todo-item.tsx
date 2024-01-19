import { TodoItemType } from '@/types/TodoItemType';
import { Checkbox } from './ui/checkbox';

export default function ToDoItem(props: { item: TodoItemType }) {
	const { item } = props;

	return (
		<div className='items-top flex space-x-2'>
			<Checkbox id={item.title} />
			<div className='grid gap-1.5 leading-none'>
				<label
					htmlFor={item.title}
					className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
				>
					{item.title}
				</label>
				<p className='text-sm text-muted-foreground'>
					I have not yet implemented the item description.
				</p>
			</div>
		</div>
	);
}
