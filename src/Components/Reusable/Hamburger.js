import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bar = styled.div`
	width: 35px;
	height: 5px;
	background-color: #333;
	margin: 6px 0;
	transition: 0.4s;
`;

const Hamburger = ({ collapsed, handleCollapsing }) => {
	if (collapsed) {
		return (
			<div
				style={{
					display: 'inline-block', cursor: 'pointer', zIndex: 3, position: 'absolute', right: '20px',
				}}
				onClick={handleCollapsing}
				onKeyPress={handleCollapsing}
				role="button"
				tabIndex="0"
			>
				<Bar />
				<Bar />
				<Bar />
			</div>
		);
	}
	return (
		<div
			style={{
				display: 'inline-block', cursor: 'pointer', zIndex: 3, float: 'right', paddingRight: '15px',
			}}
			onClick={handleCollapsing}
			onKeyPress={handleCollapsing}
			role="button"
			tabIndex="0"
		>
			<Bar style={{ transform: 'rotate(-45deg) translate(-9px, 6px' }} />
			<Bar style={{ opacity: 0 }} />
			<Bar style={{ transform: 'rotate(45deg) translate(-8px, -8px)' }} />
		</div>
	);
};

Hamburger.propTypes = {
	collapsed: PropTypes.bool.isRequired,
	handleCollapsing: PropTypes.func.isRequired,
};

export default Hamburger;
