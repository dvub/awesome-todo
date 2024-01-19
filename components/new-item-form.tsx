'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TodoItemType } from '@/types/TodoItemType';

const formSchema = z.object({
	title: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	description: z.string().optional(),
});

export default function NewItemForm(props: {
	setState: React.Dispatch<
		React.SetStateAction<{
			items: TodoItemType[];
		}>
	>;
}) {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			description: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.

		const newItem = { title: values.title };

		props.setState((prevState) => {
			return {
				...prevState,
				items: [...prevState.items, newItem],
			};
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder='...' {...field} />
							</FormControl>
							<FormDescription>
								The title of your todo item. Make it meaningful.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Input placeholder='...' {...field} />
							</FormControl>
							<FormDescription>
								<b>Optionally</b>, you can provide your todo
								item with a description.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
}
