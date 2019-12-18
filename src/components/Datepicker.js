// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import subDays from "date-fns/subDays";

type DatepickerInputProps = {
    onClick?: PropTypes.func,
    value?: string,
};
class DatepickerInput extends Component<DatepickerInputProps> {
    constructor(props) {
        super(props);

        this.onDateValueChange = this.onDateValueChange.bind(this);
    }

    onDateValueChange = () => {
        console.log('date value changed');
    };
    render() {
        return (
            <input
                type="text"
                className="form-control date"
                id="dash-daterange"
                onClick={this.props.onClick}
                value={this.props.value}
                onChange={this.onDateValueChange}
            />
        );
    }
}

type DatepickerInputWithAddonProps = {
    onClick?: PropTypes.func,
    value?: string,
};

class DatepickerInputWithAddon extends Component<DatepickerInputWithAddonProps> {
    render() {
        return (
            <div className="input-group">
                <input
                    type="text"
                    className="form-control form-control-light"
                    id="dash-daterange"
                    onClick={this.props.onClick}
                    value={this.props.value}
                    readOnly
                />

                <div className="input-group-append" style={{ cursor: 'pointer' }}>
                    <span className="input-group-text bg-primary border-primary text-white">
                        <i className="mdi mdi-calendar-range font-13"></i>
                    </span>
                </div>
            </div>
        );
    }
}

type HyperDatepickerProps = {
    hideAddon?: boolean,
};

type HyperDatepickerState = {
    startDate?: Date,
};

class HyperDatepicker extends Component<HyperDatepickerProps, HyperDatepickerState> {
    constructor(props: HyperDatepickerProps) {
        super(props);
        this.state = {
            startDate: subDays(new Date(), 1),
        };
        this.handleDateSelectChange = this.handleDateSelectChange.bind(this);
    }

    handleDateSelectChange = (date: any) => {
        this.setState({
            startDate: date,
        });
        this.props.showDataByDate(date);
    };

    render() {
        const input = (this.props.hideAddon || false) === true ? <DatepickerInput /> : <DatepickerInputWithAddon />;

        return (
            <DatePicker
                customInput={input}
                selected={this.state.startDate}
                onChange={this.handleDateSelectChange}
                {...this.props}
            />
        );
    }
}

export default HyperDatepicker;
