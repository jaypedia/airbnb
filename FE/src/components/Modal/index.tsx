import reactDom from 'react-dom';

import * as S from './Modal.style';

import Calendar from '@/components/Calendar';
import { ACTION } from '@/constants/actions';
import { LANGUAGE } from '@/constants/constant';
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

  const modalContents = () => {
    switch (currentField) {
      case 'dates': {
        return <Calendar language={LANGUAGE.en} />;
      }
      case 'price': {
        return 'price';
      }
      case 'guests': {
        return 'guests';
      }
      default:
        console.log('Invaild currentField');
    }
  };

  return (
    <ModalPortal>
      <S.BackgroundLayer onClick={closeModal} />
      <S.ModalContainer>{modalContents()}</S.ModalContainer>
    </ModalPortal>
  );
};

export default Modal;
