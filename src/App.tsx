import React from 'react';
import { hot } from 'react-hot-loader/root';
import CardsList from './components/Content/CardsList/CardsList';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Text, { EColors } from './globalStyles/Text/Text';
import './globalStyles/config.less';

function AppComponent() {
	return (
		<>
			<Layout>
				<Header />
				<Content>
					<CardsList />
				</Content>
			</Layout>
		</>
	);
}

export const App = hot(() => <AppComponent />);
