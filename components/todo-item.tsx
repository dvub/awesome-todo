import { TodoItemType } from '@/types/TodoItemType';

export default function ToDoItem(props: { item: TodoItemType }) {
	const { item } = props;

	return <p>{item.title}</p>;
}
