import React, { Fragment } from 'react';
import eventData from '../component_data/events.json';
import { v4 as uuidV4 } from 'uuid';

// Given a JSON object with attributes, creates a React element
const buildElement = (elementObject) => {
  // Ignore comments
  if (elementObject.type === 'comment') {
    return null;
  }

  const { type, subType, contents, children, className, value } = elementObject;
  const TagType = type; // Create a dynamic tag base on its type
  if (children) {
    console.log(children);
  }
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
      />
    );
  }
};

const Events = () => {
  const { events } = eventData;
  let count = 0;
  return events.map((event) => {
    return (
      <div key={uuidV4()} className={'card ' + event.extraClasses}>
        {event.contents.map((element) => {
          return buildElement(element);
        })}
      </div>
    );
  });
};

export default Events;
