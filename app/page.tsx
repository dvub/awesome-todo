'use client';
import React from 'react';
import './globals.css';
import NewItemDialog from '@/components/new-item-dialog';
import type { TodoItemType } from '@/types/TodoItemType';
import ItemList from '@/components/item-list';

export default function Home() {
	const [state, setState] = React.useState<{ items: TodoItemType[] }>({
		items: [],
	});
	return (
		<main className='mx-[10%] my-10'>
			<h1 className='text-2xl my-2'>Awesome Todo</h1>
			<NewItemDialog setState={setState} />
			<ItemList items={state.items} />
		</main>
	);
}
