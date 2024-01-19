import { TodoItemType } from '@/types/TodoItemType';
import ToDoItem from './todo-item';

export default function ItemList(props: { items: TodoItemType[] }) {
	const items = props.items.map((item, index) => {
		return <ToDoItem key={index} item={item} />;
	});
	return (
		<div>
			<h1>Items</h1>
			{items}
		</div>
	);
}
