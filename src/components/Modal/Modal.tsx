import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";

const Feedback = (): JSX.Element => {
  const { modalText: feedbackMessage, isError } = useAppSelector(
    ({ uiModal }) => uiModal
  );
  const dispatch = useAppDispatch();

  const closeFeedback = useCallback(() => {
    dispatch(closeModalActionCreator());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeFeedback();
    }, 2300);
    return () => {
      clearTimeout(timer);
    };
  }, [closeFeedback]);

  return (
    <div className={isError ? "feedback-error" : "feedback-success"}>
      <div className="feedback-message">{feedbackMessage}</div>
    </div>
  );
};

export default Feedback;
