import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import CardsList from './components/Content/CardsList/CardsList';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import './config.less';
import { GenericList } from './HW/GenericList';
import {
	generateId,
	generateRandomString,
} from './utils/js/generateRandomIndex';
import { merge } from './utils/js/merge';

const LIST = [
	{ As: 'li' as const, text: 'fd' },
	{ As: 'li' as const, text: 'ssssd' },
	{ As: 'li' as const, text: 'bbbbf' },
].map(generateId);

function AppComponent() {
	const [list, setList] = useState(LIST);

	const handleItemClick = (key: string) => {
		setList(list.filter((item) => item.key !== key));
	};

	const handleAdd = () => {
		setList(list.concat(generateId({ text: generateRandomString(), As : 'li' as const })));
	};

	return (
		<>
			<Layout>
				<Header />
				<Content>
					<CardsList />
					<button onClick={handleAdd}>Add Element</button>
					<ul>
						<GenericList list={list.map(merge({ onClick: handleItemClick }))} />
					</ul>
				</Content>
			</Layout>
		</>
	);
}

export const App = hot(() => <AppComponent />);
