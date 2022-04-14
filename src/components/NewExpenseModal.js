import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { modalsActions } from "../store/modals-slice";
import { budgetsActions } from "../store/budgets-slice";
import { useRef, useState } from "react";

const NewExpenseModal = () => {
  const dispatch = useDispatch();
  const { show, id } = useSelector((state) => state.modals.newExpenseModal);
  const [validated, setValidated] = useState(false);
  const budgets = useSelector((state) => state.budgets.budgets);
  const nameRef = useRef();
  const amountRef = useRef();
  const budgetRef = useRef();

  const handleClose = () => {
    dispatch(modalsActions.hideNewExpenseModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      const expenseName = nameRef.current.value.trim();
      const amount = +amountRef.current.value.trim();
      const budgetId = +budgetRef.current.value;
      dispatch(budgetsActions.addExpense({ expenseName, amount, budgetId }));
      handleClose();
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const optionElements = budgets.map((budget) => {
    return (
      <option value={budget.id} key={budget.id}>
        {budget.budgetName}
      </option>
    );
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>New Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formExpenseName">
            <Form.Label>Expense Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Netflix, Gas..."
              ref={nameRef}
              required
            />
            <Form.Control.Feedback type="invalid">
              Required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formExpenseAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="e.g. 50"
              ref={amountRef}
            />
            <Form.Control.Feedback type="invalid">
              Required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formExpenseAmount">
            <Form.Label>Select Budget</Form.Label>
            <Form.Select ref={budgetRef} defaultValue={id}>
              {optionElements}
            </Form.Select>
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
              Add Expense
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewExpenseModal;
