import React, { Fragment } from 'react';
import eventData from '../component_data/events.json';
import { v4 as uuidV4 } from 'uuid';

// Given a JSON object with attributes, creates a React element
const buildElement = (elementObject) => {
  const { type, subType, contents, children, className, value, placeholder } =
    elementObject;
  const TagType = type; // Create a dynamic tag base on its type
  if (type !== 'input') {
    return (
      <TagType
        key={uuidV4()}
        type={subType ? subType : undefined}
        className={className ? className : undefined}
        value={value ? value : undefined}
      >
        {contents ? contents : ''}
        {children
          ? children.map((child) => {
              return buildElement(child);
            })
          : null}
      </TagType>
    );
  } else {
    return (
      <TagType
        key={uuidV4()}
        type={subType ? subType : undefined}
        value={value ? value : undefined}
        placeholder={placeholder ? placeholder : undefined}
      />
    );
  }
};

const GameEvents = () => {
  const { gameEvents } = eventData;
  return gameEvents.map((gameEvent) => {
    return (
      <div key={uuidV4()} className={'card ' + gameEvent.extraClasses}>
        {gameEvent.contents.map((element) => {
          return buildElement(element);
        })}
      </div>
    );
  });
};

export default GameEvents;
