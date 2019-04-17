import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CommonProps } from '../common';

export type LineRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const EuiLoadingContent: FunctionComponent<
  CommonProps &
    HTMLAttributes<HTMLDivElement> & {
      lines?: LineRange;
    }
> = ({ lines = 3, className, ...rest }) => {
  const classes = classNames('euiLoadingContent', className);
  const lineElements = [];

  for (let i = 0; i < lines; i++) {
    lineElements.push(
      <span key={i} className="euiLoadingContent__singleLine">
        <span className="euiLoadingContent__singleLineBackground" />
      </span>
    );
  }

  return (
    <span className={classes} {...rest}>
      {lineElements}
    </span>
  );
};
