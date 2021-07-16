import React from 'react'
import './InputComponent.css'
import { Inputicon } from './Inputicon'
import { InputTemplate } from './InputTemplate'
import { Text } from './Text'
export const InputComponent = () => {
    return(
        <div className='cont'>
            <div className="one">
                <div className="first">
                    <Text text="<Input />" />
                    <InputTemplate />
                </div>
                <div className="second">
                    <Text text="&:hover" />
                    <InputTemplate inputStyle='input-hover' />
                </div>
                <div className="third">
                    <Text text="&:focus" />
                    <InputTemplate inputStyle='input-focus' />
                </div>
            </div>
            <div className="two">
                <div className="first">
                    <Text text="<Input />" />
                    <InputTemplate type='error' inputStyle='input-error' />
                </div>
                <div className="second">
                    <Text text="&:hover" />
                    <InputTemplate type='error' inputStyle='input-error-hover' />
                </div>
                <div className="third">
                    <Text text="&:focus" />
                    <InputTemplate type='error' inputStyle='input-error-focus' />
                </div>
            </div>
            <div className="three">
                <div className="first">
                    <Text text="<Input disabled />" />
                    <InputTemplate isDisabled="true" inputStyle='input-disabled' />
                </div>
            </div>
            <div className="four">
                <div className="first">
                    <Text text="<Input helperText=”Some interesting text” />" />
                    <InputTemplate text='Some interesting text' />
                </div>
                <div className="second">
                    <Text text="<Input helperText=”Some interesting text” error />" />
                    <InputTemplate text='Some interesting text' inputStyle='input-error' type='error' />
                </div>
            </div>
            <div className="icons">
                <div className="first">
                    <Text text="<Input startIcon />" />
                    <Inputicon type="left" />
                </div>
                <div className="first">
                    <Text text="<Input endIcon />" />
                    <Inputicon />
                </div>
            </div>
            <div className="five">
                <div className="first">
                    <Text text="<Input value=”text” />" />
                    <InputTemplate>Text</InputTemplate>
                </div>
            </div>
            <div className="six">
                <div className="first">
                    <Text text="<Input size=”sm” />" />
                    <InputTemplate inputSize='input-sm' />
                </div>
                <div className="second">
                    <Text text="<Input size=”md” />" />
                    <InputTemplate />
                </div>
            </div>
            <div className="seven">
                <div className="first">
                    <Text text="<Input fullWidth />" />
                    <InputTemplate inputStyle='input-100'>Text</InputTemplate>
                </div>
            </div>
            <div className="eight">
                <div className="first">
                    <Text text="<Input multiline row=”4” />" />
                    <textarea rows='8' placeholder='Placeholder'></textarea>
                </div>
            </div>
        </div>
    )
}