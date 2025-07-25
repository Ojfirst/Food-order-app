import { Fragment } from 'react';
import classes from './Modal.module.css';
import { createPortal } from 'react-dom';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const PortalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<Fragment>
			{createPortal(<Backdrop onClose={props.onClose} />, PortalElement)}
			{createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				PortalElement
			)}
		</Fragment>
	);
};

export default Modal;
