import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import NewItemForm from '@/components/new-item-form';
export default function NewItemDialog(props: { setState: any }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>New Item</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add New todo</DialogTitle>
					<DialogDescription>Add some stuff!</DialogDescription>
					<NewItemForm setState={props.setState} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
