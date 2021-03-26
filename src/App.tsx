import React from 'react';
import { hot } from 'react-hot-loader/root';
import CardsList from './components/Content/CardsList/CardsList';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import './config.less';
import { MyList } from './HW/GenericList';
import { generateId } from './utils/generateRandomIndex';

const LIST = [
	{ value: 'fd' },
	{ value: 'ssssd' },
	{ value: 'bbbbf' },
	{ value: 'ddcdf' },
].map(generateId);

const AppComponent = () => {

	console.log(LIST);
	
	return (
		<>
			<Layout>
				<Header />
				<Content>
					<CardsList />
			{/* 		<MyList list={LIST} onClick={console.log}  /> */}
				</Content>
			</Layout>
		</>
	);
};

export const App = hot(AppComponent);
