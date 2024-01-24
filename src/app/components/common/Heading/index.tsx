import React from 'react';

import './index.scss';

export const Heading: React.FC<{ message: string; className?: string }> = ({ message, className = '' }) =>
    <h1 className={`heading ${className}`}>
        {message.split('').map((letter: string, index: number) =>
            <div key={index} style={{display:"inline"}}>
                <span
                    className={`heading__letter ${className && `${className}__letter`}`}
                    datatype={letter}
                    style={{ animationDelay: `${0.2 + 0.09 * index}s` }}
                >
                    {letter}
                </span>
                {(letter === ',' || letter === '!' || letter === ':') && <br />}
            </div>
        )}
    </h1>;