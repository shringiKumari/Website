import React, { Component } from 'react';
import ReactTabs, { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import './react-tabs.css' 

class TabsWrapper extends Component {
	render() {
		return(
			<Tabs>
				<TabList>
					<Tab> Test 1 </Tab>
					<Tab> Test 2 </Tab>
				</TabList>
				<TabPanel>
					<h2> Test 1 is here </h2>
					</TabPanel>
				<TabPanel>
					<h2> Test 2 is here </h2>
				</TabPanel>
			</Tabs>
		);
	}
}

export default TabsWrapper;