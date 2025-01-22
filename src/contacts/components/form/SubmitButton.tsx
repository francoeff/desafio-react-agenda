import { Button, Form, FormInstance } from 'antd';
import { useEffect, useState } from 'react';

interface SubmitButtonProps {
  form: FormInstance;
  onSubmit?: () => void;
}

export const SubmitButton: React.FC<
  React.PropsWithChildren<SubmitButtonProps>
> = ({ form, onSubmit, children }) => {
  const [submittable, setSubmittable] = useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button
      onClick={onSubmit}
      type='primary'
      htmlType='submit'
      disabled={!submittable}
    >
      {children}
    </Button>
  );
};
