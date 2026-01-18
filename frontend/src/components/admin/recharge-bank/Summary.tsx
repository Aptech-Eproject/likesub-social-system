function Summary() {
    const totalPaid = 0;
    const totalReceived = 0;

    return (
        <div className="text-[13px] font-medium text-gray-800">
            Đã thanh toán: <span className="text-red-600 font-bold">{totalPaid}đ</span> | Thực nhận: <span className="text-red-600 font-bold">{totalReceived}đ</span>
        </div>
    )
}

export default Summary