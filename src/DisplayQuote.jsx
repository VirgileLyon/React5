import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
            <img  src={quote.image}  alt="picture"  />
            <ul>
                <li>Quote : {quote.quote}</li>
                <li>
                    Name : {quote.character}
                </li>
               
                <li>
                    Direction : {quote.characterDirection},
                   
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;