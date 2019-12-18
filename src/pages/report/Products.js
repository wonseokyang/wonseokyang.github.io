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
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory, {
    PaginationProvider,
    SizePerPageDropdownStandalone,
    PaginationTotalStandalone,
    PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import classNames from 'classnames';

import PageTitle from '../../components/PageTitle';
import HyperDatepicker from '../../components/Datepicker';
import { products } from './Data';
import moment from 'moment';
import subDays from "date-fns/subDays";

// the table with selectable records
const TableWithSeletableRows = mainProps => {
    const [mainData, setMainData] = React.useState(mainProps.data.filter(data => data.date === moment().subtract(1, 'days').format('MM/DD/YYYY')));
    const showDataByDate = (date) => {
        setMainData(mainProps.data.filter(data => data.date === moment(date).format('MM/DD/YYYY')));
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
            <UncontrolledDropdown className="d-inline">
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
    const { ExportCSVButton } = CSVExport;

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
                <ToolkitProvider
                    keyField="id"
                    data={mainData}
                    columns={mainProps.columns}
                    search
                    exportCSV={{ onlyExportFiltered: true, exportAll: false }}>
                    {props => (
                        <React.Fragment>
                            <Row className="mt-2">
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
                                    dataField: 'exported',
                                    order: 'desc',
                                }]}
                            />
                            <Row>
                                <Col>
                                    <SizePerPageDropdownStandalone {...paginationProps} />
                                    <PaginationTotalStandalone {...paginationProps} dataSize={products.length} />
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
const Products = () => {
    // custom column render
    const ProductColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <p className="m-0 font-16">
                    {cell}
                </p>
            </React.Fragment>
        );
    };

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
            dataField: 'name',
            text: 'Product',
            sort: true,
            formatter: ProductColumn,
            headerAttrs: (column, colIndex) => ({ width: '30%' }),
        },
        {
            dataField: 'brand',
            text: 'Brand',
            sort: true,
        },
        {
            dataField: 'date',
            text: 'Date',
            sort: true,
        },
        {
            dataField: 'ordered',
            text: 'Ordered Products',
            sort: true,
        },
        {
            dataField: 'exported',
            text: 'Exported Products',
            sort: true,
        },
        {
            dataField: 'price',
            text: 'Total Price',
            sort: true,
        },
        {
            dataField: 'stock',
            text: 'Stock',
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
                    { label: 'Report', path: '/report/productsExported' },
                    { label: 'Products Exported', path: '/report/productsExported', active: true },
                ]}
                title={'Products Exported'}
            />

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <TableWithSeletableRows
                                data={products}
                                columns={columns}
                                paginationOptions={paginationOptions}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Products;
