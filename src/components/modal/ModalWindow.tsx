import { FC, useRef } from "react";
import { Modal } from "bootstrap";
import React from "react";
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
  const modalRef = useRef(null);

  const showModal = () => {
    const modal = modalRef.current;
    if (modal != null) {
      const bsModal = new Modal(modal, {});
      bsModal.show();
    }
  };
  const closeModal = () => {
    const modal = modalRef.current;
    if (modal != null) {
      const bsModal = Modal.getInstance(modal);
      bsModal?.hide();
    }
  };
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
          <span>{buttonText}</span>
        </button>
      )}

      <div className="modal fade" tabIndex={-1} ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
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
