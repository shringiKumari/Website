import React, { Component } from 'react';
import ReactTabs, { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import './react-tabs.css'
import './underwatermadhuban.css'

class TabsWrapper extends Component {
	render() {
		return(
			<Tabs>
				<TabList>
					<Tab> About </Tab>
					<Tab> Underwater Madhuban </Tab>
					<Tab> Words </Tab>
					<Tab> Games </Tab>
				</TabList>
				<TabPanel>
					<h2> Test 1 is here </h2>
					</TabPanel>
				<TabPanel>
					<div id="underwaterimages">
					<img src={ require('./UnderwaterMadhuban/1.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/2.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/3.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/4.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/5.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/6.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/7.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/8.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/9.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/10.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/11.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/12.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/13.jpg') } width="500" height="500"/>
					<img src={ require('./UnderwaterMadhuban/14.jpg') } width="500" height="500"/>
					</div>
				</TabPanel>
			</Tabs>
		);
	}
}

export default TabsWrapper;