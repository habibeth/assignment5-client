import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TMRSelectProps = {
    label: string;
    name: string;
    options?: { value: string, label: string, disabled?: boolean }[] | undefined;
    disabled?: boolean;
    mode?: 'multiple' | undefined;
}



const MRSelect = ({ label, name, options, disabled, mode }: TMRSelectProps) => {

    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <Form.Item label={label}>
                    <Select
                        mode={mode}
                        {...field}
                        style={{ width: '100%' }}
                        options={options}
                        size="middle"
                        disabled={disabled}
                    />
                    {error && <p style={{ marginTop: "5px", color: "red" }}>{error.message}</p>}
                </Form.Item>
            )}
        />
    );
};

export default MRSelect;