import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: string[]
    onChangeOption: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption(e.currentTarget.value);
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((el, i) => (
        <label key={name + '-' + i}>
            <input
                type={"radio"}
                onChange={onChangeCallback}
                value={el}
                checked={value === el}
                // name, checked, value, onChange
            />
            {el}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
