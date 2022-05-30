import React, {useState} from 'react'
import Text from './Text';

function ExText() {
    const initialText = `אויר הרים צלול כיין
    וריח אורנים
    נישא ברוח הערביים
    עם קול פעמונים.
    ובתרדמת אילן ואבן
    שבויה בחלומה
    העיר אשר בדד יושבת
    ובליבה חומה
    ירושלים של זהב
    ושל נחושת ושל אור
    הלא לכל שירייך
    אני כינור
    ירושלים של זהב
    ושל נחושת ושל אור
    הלא לכל שירייך
    אנ
`;
const  [text,setText]=useState(initialText)

  return (
    <div>
        <Text text={text}
maxNum= {15}    />
    </div>
  )
}

export default ExText;