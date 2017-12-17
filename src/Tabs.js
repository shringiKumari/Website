import React, { Component } from 'react';
import ReactTabs, { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import './react-tabs.css'
import './App.css';
import './underwatermadhuban.css'

class TabsWrapper extends Component {
	render() {
		return(
			<Tabs>
				<TabList>
					<Tab> Underwater Madhuban </Tab>
					<Tab> Words </Tab>
					<Tab> Games </Tab>
				</TabList>
				<TabPanel>
					<div id="underwaterimages">
					<img src={ require('./UnderwaterMadhuban/1.jpg') } width="700" />
					</div>
					<div id="underwaterimages">
					<img src={ require('./UnderwaterMadhuban/2.jpg') } width="700" />
					</div>
					<div id="underwaterimages">
					<img src={ require('./UnderwaterMadhuban/3.jpg') } width="700" />
					</div>
					<div id="underwaterimages">
					<img src={ require('./UnderwaterMadhuban/4.jpg') } width="700" />
					</div>
					<div id="underwaterimages">
					<img src={ require('./UnderwaterMadhuban/5.jpg') } width="700" />
					</div>
				</TabPanel>
			</Tabs>
		);
	}
}

export default TabsWrapper;