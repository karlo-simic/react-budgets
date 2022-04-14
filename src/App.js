import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import BudgetList from "./components/BudgetList";
import BudgetModal from "./components/BudgetModal";
import NewBudgetModal from "./components/NewBudgetModal";
import NewExpenseModal from "./components/NewExpenseModal";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <BudgetList />
      </Container>

      <BudgetModal />
      <NewBudgetModal />
      <NewExpenseModal />
    </>
  );
};

export default App;
