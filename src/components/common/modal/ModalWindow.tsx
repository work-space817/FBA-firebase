import { FC, useRef } from "react";
import { Modal } from "bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IModalCloser,
  SelectCategoriesActionType,
} from "../../../store/reducers/types";
interface IModalProps {
  children: React.ReactNode;
  title: string;
  buttonText?: string | React.ReactNode;
  customActive?: React.ReactNode;
}

const ModalWindow: FC<IModalProps> = ({
  children,
  title,
  buttonText,
  customActive,
}) => {
  const dispatch = useDispatch();
  const modalRef = useRef<any>(null);
  const { isModalClose } = useSelector(
    (store: any) => store.modalClose as IModalCloser
  );

  const showModal = () => {
    const modal = modalRef.current;
    if (modal != null) {
      const bsModal = new Modal(modal, {});
      bsModal.show();
    }
    const unselectedCategory = dispatch({
      type: SelectCategoriesActionType.UNSELECT_CATEGORIES,
    });
  };
  const closeModal = () => {
    const modal = modalRef.current;
    if (modal != null) {
      const bsModal = Modal.getInstance(modal);
      bsModal?.hide();
    }
  };

  if (isModalClose) {
    const modal = modalRef.current;
    const bsModal = Modal.getInstance(modal);
    bsModal?.hide();
  }
  return (
    <>
      {customActive ? (
        <button className="bg-transparent" onClick={showModal}>
          {customActive}
        </button>
      ) : (
        <button
          className="bg-custom rounded-4 p-2 text-white"
          onClick={showModal}
        >
          <span className="font-Quicksand-SemiBold fs--1">{buttonText}</span>
        </button>
      )}

      <div className="modal fade" tabIndex={-1} ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close border"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
