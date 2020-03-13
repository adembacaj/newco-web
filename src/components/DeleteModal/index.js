/*
    This is a Modal which is imported on every page, and we use it to ask the user if he want to delete an item.
    It has some props like:
        - isOpen,
        - toggle,
        - title,
        - text,
        - delete
*/
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = (props) => {
    return (
        <div>
            <Modal isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
                <ModalBody>{props.text}</ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={props.delete}>Delete</Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;