import React from 'react';
import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd';

import { Card } from '@mui/material';

const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 5px;
  max-width: 311px;
  /* background: ${({ isDragging }) => (isDragging ? 'rgba(255, 59, 59, 0.15)' : 'white')}; */
  ${'' /* background: white; */}
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
  /* .priority{ */
  /* margin-right: 12px; */
  /* align-self: center;
    svg{
      width: 12px !important;
      height: 12px !important;
      margin-right: 12px; */
  /* margin-top: 2px; */
  /* } */
  /* } */
`;

const TaskCard = ({ item, index }) => (
  <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided) => (
      <Card
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        sx={{
          my: 1,
          borderRadius: 1.5,
          boxShadow: 20,
          backdropFilter: 'blur(5px)',
          backgroundColor: index / 2 ? 'rgba(138, 200, 245, 0.3)' : 'rgba(226, 138, 44, 0.39)',
        }}
      >
        <TaskInformation>
          <p>{item.Task}</p>
          <div className="secondary-details">
            <p>
              <span>
                {new Date(item.Due_Date).toLocaleDateString('en-us', {
                  month: 'short',
                  day: '2-digit',
                })}
              </span>
            </p>
          </div>
        </TaskInformation>
      </Card>
    )}
  </Draggable>
);

export default TaskCard;

// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>
