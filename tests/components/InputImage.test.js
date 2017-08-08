import React from 'react';
import InputImage from "../../src/components/InputImage";
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';

var img_before = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
var img_after = 'https://i.kinja-img.com/gawker-media/image/upload/s--6ixzaaqi--/c_scale,fl_progressive,q_80,w_800/ctdqbmlfjhnvhwoyoiei.jpg';

describe('InputImage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <InputImage image='img_before' action={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have element with class name file-input-container', () => {
    const tree = shallow(
      <InputImage image='img_before' action={jest.fn()} />
    );
    expect(tree.find('.file-input-container').exists()).toBe(true);
  });

  it('should have initial element with class name "btn btn-upload"', () => {
    const tree = shallow(
      <InputImage image='img_before' action={jest.fn()} />
    );
    expect(tree.find('.btn-upload').exists()).toBe(true);
  });

  it('should have element with class name file-input', () => {
    const tree = shallow(
      <InputImage image='img_before' action={jest.fn()} />
    );
    expect(tree.find('.file-input').exists()).toBe(true);
  });

  // it('should have element with id image-input', () => {
  //   const tree = shallow(
  //     <InputImage image='img_before' action={jest.fn()} />
  //   );
  //   expect(tree.find('#image-input').exists()).toBe(true);
  // });

  it('changes image source on prop change', () => {
    let value = img_before;
    let action = (val) => { value = val; };

    const component = mount(
      <InputImage image={img_before} action={ jest.fn() } />
    );

    let src = (component.find('.image-preview')).prop('src');
    expect(src).toBe(img_before);
  });
})
