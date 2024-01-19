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
import { DialogClose } from '@/components/ui/dialog'
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
		const newItem = { title: values.title, description: values.description };

		props.setState((prevState) => {
			return {
				...prevState,
				items: [...prevState.items, newItem],
			};
		});
    form.setValue('description', '');
    form.setValue('title', '');
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
        <div className='w-full flex justify-between'>

          <DialogClose>
            <Button type="button" variant="secondary">Close</Button>
          </DialogClose>
				<Button type='submit'>Submit</Button>
        </div>
			</form>
		</Form>
	);
}
