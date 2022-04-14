import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { modalsActions } from "../store/modals-slice";
import { budgetsActions } from "../store/budgets-slice";
import { useRef, useState } from "react";

const NewBudgetModal = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.modals.newBudgetModal);
  const [validated, setValidated] = useState(false);
  const nameRef = useRef();
  const limitRef = useRef();

  const handleClose = () => {
    dispatch(modalsActions.hideNewBudgetModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      const budgetName = nameRef.current.value.trim();
      const limit = +limitRef.current.value.trim();
      dispatch(budgetsActions.addBudget({ budgetName, limit }));
      handleClose();
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>New Budget</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBudgetName">
            <Form.Label>Budget Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Entertainment"
              ref={nameRef}
              required
            />
            <Form.Control.Feedback type="invalid">
              Required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBudgetLimit">
            <Form.Label>Spending Limit</Form.Label>
            <Form.Control
              type="number"
              placeholder="e.g. 200"
              ref={limitRef}
              required
            />
            <Form.Control.Feedback type="invalid">
              Required
            </Form.Control.Feedback>
          </Form.Group>
          <div className="text-end">
            <Button
              variant="outline-secondary"
              className="me-2"
              type="button"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Budget
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewBudgetModal;
