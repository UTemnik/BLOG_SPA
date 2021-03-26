import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Dropdown from './common/Dropdown/Dropdown';
import CardsList from './components/Content/CardsList/CardsList';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import './config.less';
import { GenericList } from './HW/GenericList';

function AppComponent() {
	return (
		<>
			<Layout>
				<Header />
				<Content>
					<CardsList />
					<div>
						<Dropdown
							onClose={() => console.log('closed')}
							onOpen={() => console.log('open')}
							isOpen={false}
							button={<button>Test</button>}
						>
							<CardsList />
						</Dropdown>
					</div>
				</Content>
			</Layout>
		</>
	);
}

export const App = hot(() => <AppComponent />);
