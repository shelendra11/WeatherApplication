import React from 'react';
import {shallow} from 'enzyme';
import { OutlineButton } from '../OutlineButton';
import { Button } from 'react-native-elements';
describe('Outline Button Test Cases',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<OutlineButton title={'Outline Button Test'}/>);
    });
    it('Outline Button SnapShot',()=>{
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(Button).length).toBe(1);
    });

    it('Outline Button Lost View Snapshot',()=>{
        wrapper.setProps({title:''})
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(Button).length).toBe(0);
    });
});