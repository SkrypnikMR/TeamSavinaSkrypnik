import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ChatMessages from '../ChatMessages';

describe('ChatDisplay', () => {
  let props;
  const img = '';
  const author = '';
  const fielmessageTextds = '';
  const messageTime = '';
  beforeEach(() => {
    props = {
        img,
        author,
        fielmessageTextds,
        messageTime,
    };
    });
    it('Should match snapshot', () => {
        const component = shallow(<ChatMessages {...props} />);
        expect(component.html).toMatchSnapshot();
    });
    it('Should render StMessage', () => {
      const component = shallow(<ChatMessages {...props} />);
      expect(component.find('styled__StMessage')).toHaveLength(1);
    });
    it('Should render StPhoto', () => {
      const component = shallow(<ChatMessages {...props} />);
      expect(component.find('styled__StPhoto')).toHaveLength(1);
    });
    it('Should render StText', () => {
      const component = shallow(<ChatMessages {...props} />);
      expect(component.find('styled__StText')).toHaveLength(1);
    });
    it('Should render StTitle', () => {
      const component = shallow(<ChatMessages {...props} />);
      expect(component.find('styled__StTitle')).toHaveLength(1);
    });
    it('Should render StData', () => {
      const component = shallow(<ChatMessages {...props} />);
      expect(component.find('styled__StData')).toHaveLength(1);
    });
    it('Should render img', () => {
      const component = shallow(<ChatMessages {...props} />);
      expect(component.find('img')).toHaveLength(1);
    });
    it('Should render div', () => {
      const component = shallow(<ChatMessages {...props} />);
      expect(component.find('div')).toHaveLength(1);
    });
    it('Should render defaultImg', () => {
      const props = {
        content: '',
        img: 'wrongImagePath',
        color: '',
      };
      act(() => {
        const component = mount(<ChatMessages {...props} />);
        const onError = component.find('img').prop('onError');
        const image = component.find('img');
        onError();
        expect(image.prop('src')).toBe(props.img);
      });
    });
});
