// @flow

import React, { Component } from 'react';
import PropTyes from 'prop-types';

import { ListItem as MuiListItem } from 'material-ui/List';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /**
   * If true, generate a nested-list-indicator icon when nested list items are detected.
   * Note that an indicator will not be created if a rightIcon or rightIconButton has been
   * provided to the element.
   */
  autoGenerateNestedIndicator?: boolean,

  /**
   * Children passed into the ListItem.
   */
  children?: Node,

  /**
   * The element to use as the container for the ListItem. Either a string to use a DOM element
   * or a ReactElement. This is useful for wrapping the ListItem in a custom Link component.
   * If a ReactElement is given, ensure that it passes all of its given props through to the
   * underlying DOM element and renders its children prop for proper integration.
   */
  containerElement?: string | Element,

  /**
   * If true, the element will not be able to be focused by the keyboard.
   */
  disabledKeyboardFocus?: boolean,

  /**
   * If true, the element will not be clickable and will not display hover effects.
   * This is automatically disabled if either leftCheckbox or rightToggle is set.
   */
  disabled?: boolean,

  /**
   * Dash-assigned callback that gets fired when the input changes.
   */
  fireEvent: () => void,

  /**
   * Override the hover background color.
   */
  hoverColor?: string,

  /**
   * The element's ID.
   */
  id: string,

  /**
   * If true, the nested ListItems are initially displayed.
   */
  initiallyOpen?: boolean,

  /**
   * Override the inline-styles of the inner div element.
   */
  innerDivStyle?: Object,

  /**
   * If true, the children will be indented by 72px. This is useful if there is no left
   * avatar or left icon.
   */
  insetChildren?: boolean,

  /**
   * Use to control if the list item should render as keyboard focused. If undefined (default),
   * this will be automatically managed. If provided, it will change the component's style.
   * Note that this will not change the actual focus - and should only be used when you want to
   * simulate keyboard focus (eg. in a rich text input autocomplete).
   */
  isKeyboardFocused?: boolean,

  /**
   * This is the Avatar element to be displayed on the left side.
   */
  leftAvatar?: Element,

  /**
   * This is the Checkbox element to be displayed on the left side.
   */
  leftCheckbox?: Element,

  /**
   * This is the SvgIcon or FontIcon to be displayed on the left side.
   */
  leftIcon?: Element,

  /**
   * An array of ListItems to nest underneath the current ListItem.
   */
  nestedItems?: Array,

  /**
   * Override the inline-styles of the nested items' NestedList.
   */
  nestedListStyle?: Object,

  /**
   * Control toggle state of nested list.
   */
  open?: boolean,

  /**
   * This is the block element that contains the primary text. If a string is passed in,
   * a div tag will be rendered.
   */
  primaryText: Node,

  /**
   * If true, clicking or tapping the primary text of the ListItem toggles the nested list.
   */
  primaryTogglesNestedList?: boolean,

  /**
   * This is the Avatar element to be displayed on the right side.
   */
  rightAvatar?: Element,

  /**
   * This is the SvgIcon or FontIcon to be displayed on the right side.
   */
  rightIcon?: Element,

  /**
   * This is the IconButton to be displayed on the right side. Hovering over this button will
   * remove the ListItem hover. Also, clicking on this button will not trigger a ripple on the
   * ListItem; the event will be stopped and prevented from bubbling up to cause a ListItem click.
   */
  rightIconButton?: Element,

  /**
   * This is the Toggle element to display on the right side.
   */
  rightToggle?: Element,

  /**
   * This is the block element that contains the secondary text. If a string is passed in,
   * a div tag will be rendered.
   */
  secondaryText?: Node,

  /**
   * Can be 1 or 2. This is the number of secondary text lines before ellipsis will show.
   */
  secondaryTextLines?: 1 | 2,

  /**
   * Dash callback to update props on the server.
   */
  setProps: () => void,

  /**
   * Override the inline-styles of the root element.
   */
  style?: Object,
};

type State = {
  open: boolean,
};

const defaultProps = {
  autoGenerateNestedIndicator: true,
  children: [],
  containerElement: 'span',
  disabledKeyboardFocus: false,
  disabled: false,
  fireEvent: () => {},
  hoverColor: '',
  initiallyOpen: false,
  innerDivStyle: {},
  insetChildren: false,
  isKeyboardFocused: false,
  leftAvatar: null,
  leftCheckbox: null,
  leftIcon: null,
  nestedItems: [],
  nestedListStyle: {},
  open: false,
  primaryTogglesNestedList: false,
  rightAvatar: null,
  rightIcon: null,
  rightIconButton: null,
  rightToggle: null,
  secondaryText: [],
  secondaryTextLines: 1,
  setProps: () => {},
  style: {},
};

expoprt default class ListItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: this.props.open}
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== null && nextProps.open !== this.props.open) {
      this.handleChange(nextProps.open);
    }
  }

  handleChange = (open: boolean) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({open});

    this.setState({open});
  };

  render() {
    const {
      autoGenerateNestedIndicator, containerElement, disabledKeyboardFocus, disabled,
      hoverColor, initiallyOpen, innerDivStyle, insetChildren, isKeyboardFocused, leftAvatar,
      leftCheckbox, leftIcon, nestedItems, nestedListStyle, primaryTogglesNestedList,
      rightAvatar, rightIcon, rightIconButton, rightToggle, secondaryText, secondaryTextLines,
      style } = this.props;
    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiListItem
            autoGenerateNestedIndicator={autoGenerateNestedIndicator}
            containerElement={containerElement}
            disabledKeyboardFocus={disabledKeyboardFocus}
            disabled={disabled}
            hoverColor={hoverColor}
            initiallyOpen={initiallyOpen}
            innerDivStyle={innerDivStyle}
            insetChildren={insetChildren}
            isKeyboardFocused={isKeyboardFocused}
            leftAvatar={leftAvatar}
            leftCheckbox={leftCheckbox}
            leftIcon={leftIcon}
            nestedItems={nestedItems}
            nestedListStyle={nestedListStyle}
            onClick={this.handleClick}
            onKeyboardFocus={}
            onNestedListToggle={}
            open={this.state.open}
            primaryTogglesNestedList={primaryTogglesNestedList}
            rightAvatar={rightAvatar}
            rightIcon={rightIcon}
            rightIconButton={rightIconButton}
            rightToggle={rightToggle}
            secondaryText={secondaryText}
            secondaryTextLines={secondaryTextLines}
            style={style}
          >
            {this.props.children}
          </MuiListItem>
        </MuiThemeProvider>
      </div>
    );
  }
}

ListItem.defaultProps = defaultProps;