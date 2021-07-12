import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ChatListItems from '../ChatListItems';

describe('ChatListItems', () => {
  let props;
  beforeEach(() => {
    props = {
      content: '',
      img: '',
      color: '',
    };
  });
  it('Should match snapshot', () => {
    const component = shallow(<ChatListItems {...props} />);
    expect(component.html).toMatchSnapshot();
  });
  it('Should render StPhoto', () => {
    const component = shallow(<ChatListItems {...props} />);
    expect(component.find('styled__StPhoto')).toHaveLength(1);
  });
  it('Should render img', () => {
    const component = shallow(<ChatListItems {...props} />);
    expect(component.find('img')).toHaveLength(1);
  });
  it('Should render div', () => {
    const component = shallow(<ChatListItems {...props} />);
    expect(component.find('div')).toHaveLength(1);
  });
  it('Should render defaultImg', () => {
    const props = {
      content: '',
      img: 'wrongImagePath',
      color: '',
    };
    act(() => {
      const component = mount(<ChatListItems {...props} />);
      const onError = component.find('img').prop('onError');
      const image = component.find('img');
      onError();
      expect(image.prop('src')).toBe(props.img);
    });
  });
});
