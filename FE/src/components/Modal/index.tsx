import reactDom from 'react-dom';

import * as S from './Modal.style';

import Calendar from '@/components/Calendar';
import { useSearchState } from '@/context/SearchProvider';

const ModalPortal = ({ children }) => {
  const el = document.getElementById('modal');
  return reactDom.createPortal(children, el);
};

const Modal = ({ onClose }) => {
  const { currentField } = useSearchState();

  const modalContents = () => {
    switch (currentField) {
      case 'dates': {
        return <Calendar />;
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
      <S.BackgroundLayer onClick={onClose} />
      <S.ModalContainer>{modalContents()}</S.ModalContainer>
    </ModalPortal>
  );
};

export default Modal;
