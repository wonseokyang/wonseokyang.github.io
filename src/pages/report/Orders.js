// @flow
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    FormGroup,
    Label,
} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, {
    PaginationProvider,
    SizePerPageDropdownStandalone,
    PaginationTotalStandalone,
    PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import classNames from 'classnames';

import PageTitle from '../../components/PageTitle';
import HyperDatepicker from '../../components/Datepicker';
import { orders } from './Data';
import moment from 'moment';
import subDays from "date-fns/subDays";
import Select from 'react-select';

// OrderTable
const OrderTable = mainProps => {
    const [channel, setChannel] = React.useState('All Channel');
    const [mainData, setMainData] = React.useState(mainProps.data.filter(data => data.date === moment().subtract(1, 'days').format('MM/DD/YYYY')));
    const showDataByChannel = (e) => {
        if (e.value === 'All Channel') {
            setMainData(mainProps.data);         
        } else {
            setMainData(mainProps.data.filter(data => data.order_channel === e.value));
        }
        setChannel(e.value);
    }
    const showDataByDate = (date) => {
        setMainData(mainProps.data.filter(data => data.order_channel === channel).filter(data => data.date === moment(date).format('MM/DD/YYYY')));
    };
    const showDataByAllDate = (e) => {
        e.preventDefault();
        setMainData(mainProps.data);
    }

    const customTotal = (from, to, size) => (
        <label className="react-bootstrap-table-pagination-total ml-2">
            Showing {from} to {to} of {size}
        </label>
    );

    const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
        <React.Fragment>
            <UncontrolledDropdown className="d-inline dropdown-sm">
                <DropdownToggle caret tag="button" type="button" className="btn btn-outline-secondary btn-sm">
                    {currSizePerPage}
                </DropdownToggle>
                <DropdownMenu>
                    {options.map((option, idx) => (
                        <DropdownItem
                            key={idx}
                            type="button"
                            className={classNames({ active: currSizePerPage + '' === option.page + '' })}
                            onClick={() => onSizePerPageChange(option.page)}>
                            {option.text}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
        </React.Fragment>
    );

    const { SearchBar } = Search;

    return (
        <PaginationProvider
            bootstrap4
            pagination={paginationFactory({
                ...mainProps.paginationOptions,
                paginationTotalRenderer: customTotal,
                custom: true,
                sizePerPageRenderer: sizePerPageRenderer,
            })}
            keyField="id"
            data={mainData}
            columns={mainProps.columns}>
            {({ paginationProps, paginationTableProps }) => (
                <ToolkitProvider keyField="id" data={mainData} columns={mainProps.columns} search>
                    {props => (
                        <React.Fragment>
                            <Row>
                                <Col md={3}>
                                    <Form inline className="mb-2">
                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 w-100">
                                            <Select
                                                className="react-select w-100"
                                                classNamePrefix="react-select"
                                                onChange={showDataByChannel}
                                                placeholder="All Channel"
                                                options={[
                                                    { value: 'All Channel', label: 'All Channel'},
                                                    { value: 'Gomi Online', label: 'Gomi Online' },
                                                    { value: 'Gomi Offline', label: 'Gomi Offline' },
                                                    { value: 'Shopee', label: 'Shopee' },
                                                    { value: 'Sendo', label: 'Sendo' },
                                                    { value: 'Tiki', label: 'Tiki' },
                                                ]} 
                                            />
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} xs={4} className="pr-1">
                                    <Form>
                                        <FormGroup>
                                            <button className="px-0 btn btn-info btn-block shadow-none" onClick={showDataByAllDate}>All</button>
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col md={2} xs={8} className="pl-1">
                                    <Form>
                                        <FormGroup>
                                            <HyperDatepicker
                                                maxDate={subDays(new Date(), 1)}
                                                hideAddon={true}
                                                showDataByDate={showDataByDate}
                                            />
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col md={9}>
                                    <Form inline className="mb-2 float-right">
                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                            <Label htmlFor="search" className="mr-sm-2">
                                                Search:
                                            </Label>
                                            <SearchBar {...props.searchProps} />
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                headerClasses="thead-light"
                                wrapperClasses="table-responsive"
                                {...paginationTableProps}
                                defaultSorted={[{
                                    dataField: 'order_id',
                                    order: 'desc',
                                }]}
                            />
                            <Row>
                                <Col>
                                    <SizePerPageDropdownStandalone {...paginationProps} />
                                    <PaginationTotalStandalone {...paginationProps} dataSize={orders.length} />
                                </Col>
                                <Col className="react-bootstrap-table-pagination-list">
                                    <PaginationListStandalone {...paginationProps} />
                                </Col>
                            </Row>
                        </React.Fragment>
                    )}
                </ToolkitProvider>
            )}
        </PaginationProvider>
    );
};

// main component
const Orders = () => {
    // custom column render
    const OrderColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <p className="m-0 font-weight-bold">
                    # {cell}
                </p>
            </React.Fragment>
        );
    };

    // const OrderDateColumn = (cell, row, rowIndex, extraData) => {
    //     return (
    //         <React.Fragment>
    //             {cell} <small className="text-muted">{row.order_time}</small>
    //         </React.Fragment>
    //     );
    // };

    // const ActionColumn = (cell, row, rowIndex, extraData) => {
    //     return (
    //         <React.Fragment>
    //             <Link to="/" className="action-icon">
    //                 {' '}
    //                 <i className="mdi mdi-eye"></i>
    //             </Link>
    //             <Link to="/" className="action-icon">
    //                 {' '}
    //                 <i className="mdi mdi-square-edit-outline"></i>
    //             </Link>
    //             <Link to="/" className="action-icon">
    //                 {' '}
    //                 <i className="mdi mdi-delete"></i>
    //             </Link>
    //         </React.Fragment>
    //     );
    // };

    const columns = [
        {
            dataField: 'order_id',
            text: 'Order ID',
            sort: true,
            formatter: OrderColumn,
        },
        {
            dataField: 'order_channel',
            text: 'Channel',
            sort: true,
        },
        {
            dataField: 'date',
            text: 'Date',
            sort: true,
        },
        {
            dataField: 'payment_method',
            text: 'Payment Method',
            sort: true,
        },
        // {
        //     dataField: 'action',
        //     isDummyColumn: true,
        //     text: 'Action',
        //     sort: false,
        //     classes: 'table-action',
        //     formatter: ActionColumn,
        // },
    ];
    
    const paginationOptions = {
        paginationSize: 5,
        pageStartIndex: 1,
        withFirstAndLast: false,
        showTotal: true,
        sizePerPageList: [
            {
                text: '10',
                value: 10,
            },
            {
                text: '20',
                value: 20,
            },
            {
                text: '50',
                value: 50,
            },
        ],
    };

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Report', path: '/report/ordersExported' },
                    { label: 'Orders Exported', path: '/report/ordersExported', active: true },
                ]}
                title={'Orders Exported'}
            />

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <OrderTable data={orders} columns={columns} paginationOptions={paginationOptions} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Orders;
