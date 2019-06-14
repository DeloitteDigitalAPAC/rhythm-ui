/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css} from 'lit-element';

/**
 *  RuiExpandCollapse Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable The expanded section background colour
		 */
		--bg: #F2F2F2;

		/**
		 * @variable The exapnd section text colour
		 */
		--txt: #000000;

		/**
		 * @variable The summary section text colour
		 */
		--summary-txt: #FFFFFF;

		/**
		 * @variable The summary section background colour
		 */
		--summary-bg: #000000;

		/**
		 * @variable Summary padding
		 */
		--summary-padding: 10px 70px 10px 20px;

		/**
		 * @variable Details padding
		 */
		--details-padding: 10px 20px;

		/**
		 * @variable Height of icon container
		 */
		--icon-container-height: 20px;

		/**
		 * @variable Width of icon container
		 */
		--icon-container-width: 20px;

		/**
		 * @variable Offset of icon container from right
		 * of summary container
		 */
		--icon-container-offset-right: 20px;
	}
`;

/**
 * RuiExpandCollapse CSS
 */
export const layout = css`
	.expand-collapse {
		opacity: 0;
		width: 100%;
		background-color: var(--bg);
		color: var(--txt);
		box-sizing: border-box;
	}

	.summary {
		padding: var(--summary-padding);
		background-color: var(--summary-bg);
		position: relative;
		display: flex;
		align-items: center;
		color: var(--summary-txt);
		cursor: pointer;
	}

	.icon-container {
		position: absolute;
		right: var(--icon-container-offset-right);
		width: var(--icon-container-width);
		height: var(--icon-container-height);
		transition: transform 300ms ease-in-out;
	}

	.details {
		overflow: hidden;
		transition: height 250ms ease-out;
		height: auto;
	}

	.details > ::slotted(*) {
		opacity: 0;
		padding: var(--details-padding);
		transition: opacity 200ms ease-out 250ms;
	}

	.is-open .details > ::slotted(*) {
		opacity: 1;
	}

	.is-open .icon-container {
		transform-origin: center;
		transform: rotate(180deg);
	}
`;

export default [variables, layout];