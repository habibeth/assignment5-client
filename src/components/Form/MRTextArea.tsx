import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller } from "react-hook-form";
type TInputProps = {
    name: string;
    label?: string | null;
    disabled?: boolean
}

const MRTextArea = ({ name, label, disabled }: TInputProps) => {
    return <div style={{ marginBottom: "20px" }}>
        <Controller
            name={name}
            render={({ field }) => (
                <Form.Item label={label}>
                    <TextArea
                        {...field}
                        id={name}
                        disabled={disabled}
                        showCount
                        maxLength={100}
                        style={{ height: 120, resize: 'none' }}
                    />
                </Form.Item>
            )}
        />

    </div>
};

export default MRTextArea;