import Title from './title/title.js';
import Form from './form/form.js';
import { useState } from 'react';

function Home() {
    const [formActive, setFormActive] = useState(false);

    const activateForm = () => {
        setFormActive(true);
    }

    return (<>
        <Title formActive={formActive} activateForm={activateForm} />
        <Form formActive={formActive} />
    </>);
}

export default Home;