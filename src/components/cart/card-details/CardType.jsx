import React, { useState } from 'react';
import './CardType.css';

const card_types = [
    {
        name: "mastercard",
        img: "https://s3-alpha-sig.figma.com/img/c3cb/5c55/448c44afe9329d1c8b9991900d354244?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TOOQ3N5B9rzP5K4svoajGE-auesIX93YsEO3wEuyU3zGZVzjjhKU~ltly8f99cB-KkiRHV4KSwp50NhAYI6ASWiarCpL0e0StyAEF5XAaroNcKFwot9NfMOlEbXwfUT01Ra0B8E2ly18FWSMs4LJNI1RZ~q2fvHfIhGOH-yZpmullgBaJh8XR5NIsFNUxLIgT~xiEnOFJ9IoTXZlRLilXAs5~FgZNjts07umngS7YKhG58zx5PdUMItQSWhXQau1LYISEM~Kt-bYbvgxytCVUSuMXo~CSVgdtHPohVvDuT2vSOv4oh4d-2b~gDofWzcqIR1h11fazLfV1-eThjsOTg__"
    },
    {
        name: "visa",
        img: "https://s3-alpha-sig.figma.com/img/7de6/1cab/42ca064544385ad78a91fcb69b618032?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMCck4ZSQG0Ds0Hi9EfMK5EXWkUQ0WfmWXarM9jPnjHw3d4bDpR22dBes2X3UvJLlrtQFq5PBWWyt67IWQDZzPQ7PgJqItdel4pe1b97tCygWDT2NtDbxm-KzimWSU~o~bUuwRXqDSIGT8vxw7EgS7VTIluBUcblXZbpS1AMkzOg2gpOowLmhoxcv9nJIuD-xgkX7bUZIXr5SKDkX6KRAVlBw8qOBfIsl-AfxGBA1Gr94rVb6Vv9wb1AJJlfwErIfkiTVIjq4vIQb7FUJhwhTXlWEWI9qa7nsRFduX-G0WMvAQxRDv3MXvt9k2rzEaW2j8obOpRDthyCjeqSV0kvSQ__"
    },
    {
        name: "rupay",
        img: "https://s3-alpha-sig.figma.com/img/e9a6/9168/376c70de6e59a34ca84e63220b45eb73?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FSnsxa0Bdfslc1~op7UYkMBQLmZBF3ivrPssT0MFbQ3NE-lF9dvcy2Y0Ppy2buTaulPOsiga7h~haCLPY~~zhPdSbqyO0FR4-jP6BGjjPQ-F1enXo2bRTrEQVB-q4iI3DTs6nIoi651UU9bx1QXsYy0EuLbk6PycObJK5dNOF9ZbHEGX1pKr0o6rQWgEU4Qtk-Nt71pKOfe9deRs6ZBefTmbC6B9QUBnzyCXK7d~wO9VSregqJwjyFDywWvPtsMYAeQ1cRQJ0SfGGjyIChb7toM~e8fegYVKLWsfGB6I15MFy6xTF5gcTxFBc2Hjer80Yy2aOozJuEj1nvrlsCPfzQ__"
    }
]

const CardType = ({ reset, setCredentials }) => {
    const [dataValue, setDataValue] = useState('')

    const handleCardTypeChange = (e) => {
        const value = e.target.value;
        setCredentials((prev) => {
            return { ...prev, cardType: value }
        })
        setDataValue(value)
    };


    return (
        <>
            <h4>Card Type</h4>
            <div className='card-types-wrapper'>
                {
                    (dataValue && card_types) ? card_types.map(({ name, img }) => {
                        if (dataValue === name && !reset) {
                            return <React.Fragment key={name}>
                                <input type="radio" id={name} name='cardType' value={name} onChange={handleCardTypeChange} />
                                <label htmlFor={name}><img src={img} alt={name} width={75} className="type-radio-input checked" /></label>
                            </React.Fragment>
                        }
                        return <React.Fragment key={name}>
                            <input type="radio" id={name} name='cardType' value={name} onChange={handleCardTypeChange} />
                            <label htmlFor={name}><img src={img} alt={name} width={75} className="type-radio-input" /></label>
                        </React.Fragment>
                    }) : card_types.map(({ name, img }) => {
                        return <React.Fragment key={name}>
                            <input type="radio" id={name} name='cardType' value={name} onChange={handleCardTypeChange} />
                            <label htmlFor={name}><img src={img} alt={name} width={75} className="type-radio-input" /></label>
                        </React.Fragment>
                    })
                }
            </div>
        </>
    )
}

export default CardType