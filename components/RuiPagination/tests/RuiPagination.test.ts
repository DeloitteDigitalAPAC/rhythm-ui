/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';


const exampleBasicItems = `{
	"1": {"href": '#1'},
	"2": {"href": '#2'},
	"3": {"href": '#3'},
	"4": {"href": '#4'},
	"5": {"href": '#5'},
}`

describe('RuiPagination', () => {

	it('Renders', async () => {
		const ele = await TestUtils.render('rui-pagination', {}, '');
		expect(ele).toBeDefined();
	});

	it('Renders items given via the items attribute', async () => {
		const ele = await TestUtils.render('rui-pagination', {
			items: exampleBasicItems,
			'current-page': '3'
		}, '');

		const paginationListItems = ele.shadowRoot.querySelectorAll('li');
		
		const expectedLength = Object.keys(exampleBasicItems).length + 2;
		expect(paginationListItems.length).toEqual(expectedLength)
	})
	
	// renders items given via items attribute
	// renders correct href for items
	// renders correct label for items
	// renders current page correctly


	// renders prev-link href correctly

	// renders next-link href correctly
	
	// renders items defined via num-pages attribute

	// renders truncation correctly 

	// renders custom prev-content slot item

	// renders custom next-content slot item

	// renders custom ellipses slot item
});