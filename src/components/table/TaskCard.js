import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/dragTypes';
import style from './taskCard.module.scss';

const TaskCard = ({ task: { id, title, priority, description, img, status }, index, moveCard }) => {
  const ref = useRef(null);
  const [styleCard, setStyleCard] = useState(style.card);
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    hover: (item, monitor) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  }));
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id, title, priority, description, img, status, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }));

  useEffect(() => {
    setStyleCard(prevStyle => (
      isDragging ? prevStyle.concat(` ${style.drag}`) : style.card
    ));
  }, [isDragging]);

  drag(drop(ref));

  return (
    <div className={styleCard} ref={ref}>
      <div className={style.info}>
        <h2 className={style.title}>{id}-{title}</h2>
        <div className={style.description}>
          <div className={style.block}>{priority}</div>
          <div className={style.block}>{description}</div>
        </div>
      </div>
      <div className={style.img}><img src={img} alt='avatar'></img></div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired
};

export default TaskCard;
