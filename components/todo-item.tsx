import { TodoItemType } from '@/types/TodoItemType';
import { Checkbox } from './ui/checkbox';

export default function ToDoItem(props: { item: TodoItemType }) {
	const { item } = props;

  const handleCheckChange = (e) => {
    console.log('this is working')
  }

	return (
		<div className='items-top flex space-x-2 border-2 my-6 p-3 rounded-md'>
			<Checkbox id={item.title} onCheckedChange={(e) => {handleCheckChange(e)}} />
			<div className='grid gap-1.5 leading-none'>
				<label
					htmlFor={item.title}
					className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
				>
          {item.completed && <s>{item.title}</s>}
          {!item.completed && item.title}
				</label>
				<p className='text-sm text-muted-foreground'>
          {props.item.description || ''}
				</p>
			</div>
		</div>
	);
}
