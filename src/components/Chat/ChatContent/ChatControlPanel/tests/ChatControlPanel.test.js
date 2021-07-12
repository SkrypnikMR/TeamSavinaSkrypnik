import React from 'react';
import { shallow } from 'enzyme';
import ChatControlPanel from '../ChatControlPanel';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import '/src/i18n';

describe('ChatControlPanel', () => {
  let props;
  const onChangeInput = jest.fn();
  const messageInputValue = '';
  const sendNewMessage = jest.fn();
  beforeEach(() => {
    props = {
      onChangeInput,
      messageInputValue,
      sendNewMessage,
    };
  });
  it('Should match snapshot', () => {
    const component = shallowSmart(<ChatControlPanel />);
    expect(component.html).toMatchSnapshot();
  });
  it('should render inputs', () => {
    const component = mountSmart(<ChatControlPanel {...props} />);
    expect(component.find('Input')).toHaveLength(1);
  });
  it('should render button', () => {
    const component = mountSmart(<ChatControlPanel {...props} />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('should click on the button', () => {
    const component = mountSmart(<ChatControlPanel {...props} />);
    component.find('Button').simulate('click');
    expect(sendNewMessage).toHaveBeenCalled();
  });
  it('Should render StChatControlPanel', () => {
    const component = shallow(<ChatControlPanel />);
    expect(component.find('styled__StChatControlPanel')).toHaveLength(1);
  });
});
