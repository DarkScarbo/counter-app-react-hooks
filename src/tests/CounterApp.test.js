import React from 'react';
import CounterApp from "../CounterApp";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('CounterApp', () => {

    //With Jest
    test('should show value as props', () => {
        const value = 10;
        const { getByText } = render(<CounterApp/>);

        expect(getByText(value.toString())).toBeInTheDocument();
    })
    
    //With Enzyme
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('should show CounterApp correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should show counter passed as props', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe(value.toString());
    })
    
    test('should increase counter after clicking +1 button ', () => {
       wrapper.find('button').at(0).simulate('click');
       const counterText = wrapper.find('h2').text().trim();

       expect(counterText).toBe('11');
    })

    test('should reset counter after clicking reset button ', () => {
        const value = 120;
        const wrapper = shallow(<CounterApp value={value} />);
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
 
        expect(counterText).toBe(value.toString());
    })
    
    test('should reduce counter after clicking -1 button ', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
 
        expect(counterText).toBe('9')
     })

})
