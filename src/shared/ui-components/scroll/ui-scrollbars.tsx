import Scrollbars, { ScrollbarProps } from 'react-custom-scrollbars-2';
import { forwardRef } from 'react';
import './ui-scrollbars.scss';

export const DEFAULT_UI_SCROLLBAR_STYLE = {
  opacity: 0,
  position: 'absolute',
  transition: 'opacity 200ms ease 0s',
  right: '2px',
  bottom: '2px',
  top: '2px',
  borderRadius: '3px',
};

interface ScrollbarPropsAdvanced extends ScrollbarProps {
  scrollbarWidth?: number;
}

export const UiScrollbars = forwardRef<Scrollbars, Partial<ScrollbarPropsAdvanced>>((props, ref) => {
  const { children, style = { height: '100%', width: '100%' }, scrollbarWidth, ...rest } = props;
  return (
    <Scrollbars
      renderTrackVertical={
        scrollbarWidth
          ? ({ renderTrackStyle, ...renderTrackProps }) => (
              <div
                {...renderTrackProps}
                style={{
                  ...renderTrackStyle,
                  ...DEFAULT_UI_SCROLLBAR_STYLE,
                  width: `${scrollbarWidth}px`,
                }}
              />
            )
          : undefined
      }
      ref={ref}
      className="ui-scrollbars"
      style={style}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
});
