import React from "react"
import ReactCountryFlag from "react-country-flag"

export function CountryFlags () {
    return (
        <div>
            <ReactCountryFlag
                countryCode="EG"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="EG"
            />
        </div>
    )
}

export default CountryFlags