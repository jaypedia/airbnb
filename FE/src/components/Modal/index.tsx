import reactDom from 'react-dom';

import * as S from './Modal.style';

import Calendar from '@/components/Calendar';
import GuestSelector from '@/components/GuestSelector';
import RangeSlider from '@/components/RangeSlider';
import { ACTION } from '@/constants/actions';
import { LANGUAGE, INPUT_FIELD } from '@/constants/constant';
import { useSearchUIState, useSearchUIDispatch } from '@/context';

const ModalPortal = ({ children }) => {
  const el = document.getElementById('modal');
  return reactDom.createPortal(children, el);
};

const Modal = () => {
  const { currentField } = useSearchUIState();
  const dispatch = useSearchUIDispatch();

  const closeModal = () => {
    dispatch({ type: ACTION.CLOSE_MODAL });
  };

  const getModalContents = () => {
    switch (currentField) {
      case INPUT_FIELD.CHECK_IN:
      case INPUT_FIELD.CHECK_OUT: {
        return <Calendar language={LANGUAGE.en} />;
      }
      case INPUT_FIELD.PRICE: {
        return <RangeSlider />;
      }
      case INPUT_FIELD.GUESTS: {
        return <GuestSelector />;
      }
      default:
        console.log('Invaild currentField');
    }
  };

  const modalContents = getModalContents();

  return (
    <ModalPortal>
      <S.BackgroundLayer onClick={closeModal} />
      <S.ModalContainer>{modalContents}</S.ModalContainer>
    </ModalPortal>
  );
};

export default Modal;
