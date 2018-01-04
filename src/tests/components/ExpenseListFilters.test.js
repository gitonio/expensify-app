import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

// should handle text Change 

test('should handle text Change ', () => {
    // wrapper.setProps({
    //     filters: filters
    // })

    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    //console.log(wrapper.instance().props.filters.text)
    //expect(wrapper.instance().props.filters).toEqual(value)
    expect(setTextFilter).toHaveBeenLastCalledWith(
        value
    )
})

// 
test('should sort by amount  ', () => {
    const value = 'amount'

    wrapper.find('select').simulate('change', {
        target: 'amount'
    })
    expect(sortByAmount).toHaveBeenCalled();
})

test('should sort by date  ', () => {
    const value = 'date';

    wrapper.setProps({
        filters: altFilters
    })

    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled();
})


test('should set new date on date change', () => {
    const startDate = moment()
    const endDate = moment().add(2,'days')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should set calendar focus on change', () => {
    const calendarFocused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})