const products = [
    {
        id: 1,
        name: 'Bảng Má Hồng 4 Màu Pure Theory Contour & Blusher',
        brand: 'Pure Theory',
        date: '12/16/2019',
        ordered: 10,
        exported: 2,
        stock: 200,
    },
    {
        id: 2,
        name: 'Chì Kẻ Chân Mày Pure Theory Eyebrow Pencil',
        brand: 'Pure Theory',
        date: '12/16/2019',
        ordered: 0,
        exported: 10,
        stock: 150,
    },
    {
        id: 3,
        name: 'Chì Kẻ Mày 3 Trong 1 SelfBeauty Glamup 3 In 1 Eyebrow',
        brand: 'Self Beauty',
        date: '12/16/2019',
        ordered: 10,
        exported: 2,
        stock: 198,
    },
    {
        id: 4,
        name: 'Combo Phấn Nước Siêu Che Phủ DewyCel Super Cover Cushion No.21 (+1 Refill)',
        brand: 'DewyCel',
        date: '12/16/2019',
        ordered: 10,
        exported: 2,
        stock: 130,
    },
    {
        id: 5,
        name: 'Kem Che Khuyết Điểm Forencos Tattoo Waterproff Scar Concealer',
        brand: 'Forencos',
        date: '12/16/2019',
        ordered: 10,
        exported: 5,
        stock: 125,
    },
    {
        id: 6,
        name: 'Kem Che Khuyết Điểm SelfBeauty Glamup Concealer',
        brand: 'Self Beauty',
        date: '12/17/2019',
        ordered: 10,
        exported: 20,
        stock: 200,
    },
    {
        id: 7,
        name: 'Kem Che Khuyết Điểm Stimmung Concealer',
        brand: 'Stimmung',
        date: '12/17/2019',
        ordered: 10,
        exported: 10,
        stock: 200,
    },
    {
        id: 8,
        name: 'Kem Nâng Tông Lotion Red Stop White Paint',
        brand: 'Red Stop',
        date: '12/17/2019',
        ordered: 20,
        exported: 30,
        stock: 170,
    },
    {
        id: 9,
        name: 'Kem Nền Pure Theory Liquid Foundation',
        brand: 'Pure Theory',
        date: '12/17/2019',
        ordered: 30,
        exported: 20,
        stock: 200,
    },
    {
        id: 10,
        name: 'Kem Nền Stimmung Color Corrector',
        brand: 'Stimmung',
        date: '12/17/2019',
        ordered: 40,
        exported: 15,
        stock: 195,
    },
    {
        id: 11,
        name: 'Kem Nền Pure Theory Liquid Foundation',
        brand: 'Pure Theory',
        date: '12/14/2019',
        ordered: 5,
        exported: 20,
        stock: 200,
    },
    {
        id: 12,
        name: 'Kem Nền Stimmung Color Corrector',
        brand: 'Stimmung',
        date: '12/14/2019',
        ordered: 10,
        exported: 15,
        stock: 195,
    },
];

const orders = [
    {
        id: 1,
        order_id: 1,
        order_channel: 'Gomi Online',
        date: '12/16/2019',
        payment_method: 'COD'
    },
    {
        id: 2,
        order_id: 2,
        order_channel: 'Tiki',
        date: '12/16/2019',
        payment_method: 'COD'
    },
    {
        id: 3,
        order_id: 3,
        order_channel: 'Gomi Online',
        date: '12/16/2019',
        payment_method: 'COD'
    },
    {
        id: 4,
        order_id: 4,
        order_channel: 'Gomi Online',
        date: '12/16/2019',
        payment_method: 'COD'
    },
    {
        id: 5,
        order_id: 5,
        order_channel: 'Gomi Online',
        date: '12/17/2019',
        payment_method: 'COD'
    },
    {
        id: 6,
        order_id: 6,
        order_channel: 'Sendo',
        date: '12/17/2019',
        payment_method: 'Tranfer'
    },
    {
        id: 7,
        order_id: 7,
        order_channel: 'Shopee',
        date: '12/17/2019',
        payment_method: 'COD'
    },
    {
        id: 8,
        order_id: 8,
        order_channel: 'Shopee',
        date: '12/17/2019',
        payment_method: 'MoMoPay'
    },
    {
        id: 9,
        order_id: 9,
        order_channel: 'Gomi Offline',
        date: '12/17/2019',
        payment_method: 'COD'
    },
    {
        id: 10,
        order_id: 10,
        order_channel: 'Gomi Online',
        date: '12/17/2019',
        payment_method: 'COD'
    },
    {
        id: 11,
        order_id: 11,
        order_channel: 'Gomi Offline',
        date: '12/17/2019',
        payment_method: 'COD'
    },
    {
        id: 12,
        order_id: 12,
        order_channel: 'Gomi Online',
        date: '12/17/2019',
        payment_method: 'COD'
    },
];

const ordersReturn = [
    {
        id: 1,
        order_id: 18,
        order_channel: 'Gomi Online',
        date: '12/16/2019',
        payment_method: 'COD'
    },
    {
        id: 2,
        order_id: 19,
        order_channel: 'Gomi Online',
        date: '12/16/2019',
        payment_method: 'COD'
    },
    {
        id: 3,
        order_id: 21,
        order_channel: 'Gomi Online',
        date: '12/16/2019',
        payment_method: 'COD'
    },
    {
        id: 4,
        order_id: 24,
        order_channel: 'Gomi Online',
        date: '12/16/2019',
        payment_method: 'COD'
    },
    {
        id: 5,
        order_id: 25,
        order_channel: 'Shopee',
        date: '12/17/2019',
        payment_method: 'COD'
    },
    {
        id: 6,
        order_id: 36,
        order_channel: 'Sendo',
        date: '12/17/2019',
        payment_method: 'Tranfer'
    },
    {
        id: 7,
        order_id: 37,
        order_channel: 'Shopee',
        date: '12/17/2019',
        payment_method: 'COD'
    },
    {
        id: 8,
        order_id: 38,
        order_channel: 'Gomi Online',
        date: '12/17/2019',
        payment_method: 'MoMoPay'
    },
    {
        id: 9,
        order_id: 41,
        order_channel: 'Tiki',
        date: '12/17/2019',
        payment_method: 'COD'
    },
    {
        id: 10,
        order_id: 42,
        order_channel: 'Gomi Online',
        date: '12/17/2019',
        payment_method: 'COD'
    },
    {
        id: 11,
        order_id: 43,
        order_channel: 'Shopee',
        date: '12/17/2019',
        payment_method: 'COD'
    },
    {
        id: 12,
        order_id: 48,
        order_channel: 'Gomi Online',
        date: '12/17/2019',
        payment_method: 'COD'
    },
];

export { products, orders, ordersReturn };
