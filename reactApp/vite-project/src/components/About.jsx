import React from 'react';
import {useNavigate} from "react-router-dom"
import Calculator from './Calculator';

const About = () => {
const navigate = useNavigate();

return (
<>
	<Calculator/>
	<button onClick={()=>navigate(-1)}>{"<"}</button>
</>
)
};

export default About;
