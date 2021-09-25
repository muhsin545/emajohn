import React from 'react';

const Feature = (props) => {
    const { description, value } = props.feature

    return (
        <div>


            <div>
                <ul style={{
                    margin: '0px'
                }}>
                    <small style={{
                        display: "inline-block",
                        color: 'gray'
                    }}> <li> {description}
                            <b style={{
                                fontSize: "10px",
                                color: 'gray'
                            }}> {value}</b></li></small>
                </ul>
            </div>
        </div>

    );
};

export default Feature;