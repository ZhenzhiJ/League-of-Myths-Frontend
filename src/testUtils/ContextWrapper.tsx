import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";

interface ContextWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ContextWrapper = ({ children }: ContextWrapperProps): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default ContextWrapper;
