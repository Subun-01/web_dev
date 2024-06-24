import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "" }) {

    return (
        <div className={`bg-white p-3 rounded-l text-sm flex ${className}`}>
            <div className="w-1-2">
                <label htmlFor='currency' className="text-black/40 mb-2 inline-block">{label}</label>
                <input
                    id='currency'
                    type="number"
                    className='outlined'
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                className=" rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                value={selectedCurrency}
                onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
                disabled = {currencyDisabled}
                >
                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox