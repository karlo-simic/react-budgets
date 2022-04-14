import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BudgetCard from "./BudgetCard";

import { useSelector, useDispatch } from "react-redux";
import { budgetsActions } from "../store/budgets-slice";
import { useEffect, useState } from "react";

const BudgetList = () => {
  const dispatch = useDispatch();

  const [initial, setInitial] = useState(true);

  const budgets = useSelector((store) => store.budgets.budgets);

  // Load locally stored budgets from localStorage
  useEffect(() => {
    const storedBudgets = localStorage.getItem("budgets");
    if (storedBudgets)
      dispatch(budgetsActions.setBudgets(JSON.parse(storedBudgets)));
    setInitial(false);
  }, []);

  // Update localStorage when budgets are changed
  useEffect(() => {
    if (!initial) {
      localStorage.setItem("budgets", JSON.stringify(budgets));
    }
  }, [budgets, initial]);

  const elements = budgets.map((budget) => {
    return (
      <Col xs="12" md="6" lg="4" key={budget.id}>
        <BudgetCard budgetData={budget} />
      </Col>
    );
  });
  return (
    <>
      <Row className="g-2">{elements}</Row>
    </>
  );
};

export default BudgetList;
