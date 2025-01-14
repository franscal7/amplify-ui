import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconWheelchairPickup = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 4C4.5 2.89 5.39 2 6.5 2C7.61 2 8.5 2.89 8.5 4C8.5 5.11 7.61 6 6.5 6C5.39 6 4.5 5.11 4.5 4ZM10 10.95V9C10 7.9 9.1 7 8 7H5C3.9 7 3 7.9 3 9V15H5V22H8.5V21.89C7.26 20.63 6.5 18.9 6.5 17C6.5 14.42 7.91 12.16 10 10.95ZM16.5 17C16.5 18.65 15.15 20 13.5 20C11.85 20 10.5 18.65 10.5 17C10.5 15.89 11.11 14.94 12 14.42V12.26C9.98 12.9 8.5 14.77 8.5 17C8.5 19.76 10.74 22 13.5 22C16.26 22 18.5 19.76 18.5 17H16.5ZM19.54 14H15V8H13V16H18.46L20.93 19.71L22.59 18.6L19.54 14Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
