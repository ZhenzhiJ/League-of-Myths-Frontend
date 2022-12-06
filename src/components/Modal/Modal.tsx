import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  messageFeedback: string;
  isError: boolean;
}

const Modal = ({ messageFeedback, isError }: ModalProps): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeModalActionCreator());
    }, 3000);
  }, [dispatch]);

  return (
    <ModalStyled className={isError ? "feedback-error" : "feedback-success"}>
      <div className="feedback-message">{messageFeedback}</div>
    </ModalStyled>
  );
};

export default Modal;
