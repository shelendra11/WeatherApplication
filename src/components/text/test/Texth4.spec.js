import React from "react";
import {shallow} from 'enzyme';
import { Texth4 } from "../Texth4";
import { Text } from "react-native-elements";
describe('Texth4 Test cases --------',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Texth4 title={'Settings'} style={{color:'black'}}/>);
    });
    it("Texth4 Snapshot match",()=>{
        expect(wrapper).toMatchSnapshot();
    });
    it("Texth4 Lost View Snapshot",()=>{
        wrapper.setProps({title :''});
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(Text).length).toBe(0);
    });
});