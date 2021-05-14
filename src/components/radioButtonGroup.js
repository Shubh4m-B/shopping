import React, {useState} from 'react'
import {Form, Radio} from 'semantic-ui-react'

const RadioExampleRadioGroup = (props) => {
    const [category, setCategory] = useState('');

    const changestate = (category) => {
        setCategory(category)
    }

    const radioGroup = () => {
        return props.categories.map((cate) => {
            return <Form.Field>
                <Radio
                    label={cate}
                    name='radioGroup'
                    value='this'
                    checked={category === cate}
                    onChange={() => changestate(cate)}
                />
            </Form.Field>
        })
    }

    return (
        <Form>
            <Form.Field>
                Selected value: <b>{category}</b>
            </Form.Field>
            {radioGroup()}
        </Form>
    )
}


export default RadioExampleRadioGroup;