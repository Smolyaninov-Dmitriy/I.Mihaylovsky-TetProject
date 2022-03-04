import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/dragTypes';
import Timer from '../common/Timer';
import style from './taskCard.module.scss';
import TaskDetail from '../modal/TaskDetail';

const TaskCard = ({
  task: { id, status, title, priority, description, img, deadline, member, comments },
  moveCard
}) => {
  const ref = useRef(null);
  const [styleCard, setStyleCard] = useState(style.card);
  const [showModal, setShowModal] = useState(false);

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    hover: (item, monitor) => {
      if (item.id !== id) {
        moveCard(item.id, id, item.status);
      }
    }
  }));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id, status },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }));

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    setStyleCard(prevStyle => (
      isDragging ? prevStyle.concat(` ${style.drag}`) : style.card
    ));
  }, [isDragging]);

  drag(drop(ref));

  return (
    <>
      <div className={styleCard} ref={ref} onClick={openModal}>
        <div className={style.info}>
          <h2 className={style.title}>{id}-{title}</h2>
          <div className={style.description}>
            <div className={classNames(style.block, style.priority)}>{priority}</div>
            <div className={style.block}>{description}</div>
          </div>
          <Timer text={'Time left (days)'} endDate={deadline} />
        </div>
        <div className={style.img}><img src={img} alt='avatar'></img></div>
      </div>
      <TaskDetail
        task={{ id: id, title: title, status: status, description: description, member: member, comments: comments }}
        isModalOpen={showModal}
        closeModal={closeModal}
      />
    </>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  moveCard: PropTypes.func.isRequired
};

export default TaskCard;
