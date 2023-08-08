/* eslint-disable unused-imports/no-unused-vars */
import React, { useState } from 'react';
import Card from './components/Card/card';
import List from './components/List/list';
import clsx from 'clsx';
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
type Props = {
  sideBarToggle: boolean;
};

const Board = ({ sideBarToggle = false }: Props) => {
  const itemsNormal = {
    todo: [
      {
        id: 1,
        uuid: 'kdkdkjd',
        title: 'Bug in Onboarding floor',
        epic: 'BUG FIXES',
        ticket: 'Lorem Ipsum is simply dummy',
      },
      {
        id: 2,
        uuid: 'njdhbow',
        title: 'Change Pagination in Users Table',
        epic: 'ENHANCEMENTS',
        ticket: 'simply dummy Loren Ipsum',
      },
      {
        id: 3,
        uuid: 'qwouvdjl',
        title: 'Add User Popup not closing on clicking outside',
        epic: 'BUG FIXES',
        ticket: 'Lorem Ipsum is simply dummy',
      },
    ],

    inProgress: [
      {
        id: 4,
        uuid: 'gcihdks',
        title: 'Change the table loader',
        epic: 'ENHANCEMENTS',
        ticket: 'simply dummy Loren Ipsum',
      },
      {
        id: 5,
        uuid: 'jddhjchb',
        title: 'Make the Font Size Consistent in the Form',
        epic: 'ENHANCEMENTS',
        ticket: 'Lorem Ipsum is simply dummy',
      },
    ],
  };

  const [items, setItems] = useState(itemsNormal);

  const removeFromList = (list: any, index: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list: any, index: any, element: any) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result: any) => {
    console.log('RESULT', result);
    if (!result.destination) {
      console.log(result);
      return;
    }
    const listCopy: any = { ...items };
    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(sourceList, result.source.index);
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    setItems(listCopy);
  };
  return (
    <div className={clsx('absolute p-4', sideBarToggle ? 'left-[200px]' : 'left-[30px]')}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex p-12">
          <List title="TO DO" onDragEnd={onDragEnd} name="todo">
            {items.todo.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id + ''} index={index}>
                {(provided: DraggableProvided | any, snapshot: DraggableStateSnapshot) => (
                  <div>
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card data={item} />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </List>
          <List title="IN PROGRESS" onDragEnd={onDragEnd} name="inProgress">
            {items.inProgress.map((item, index) => (
              <Draggable draggableId={item.uuid} index={index} key={item.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card data={item} />
                  </div>
                )}
              </Draggable>
            ))}
          </List>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
