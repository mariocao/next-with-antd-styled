import { Form, Input, Icon, Checkbox, Button } from "antd";
import styled from "styled-components";

const FormItem = Form.Item;

const Subtitle = styled.h3`
  padding: 20px;
  text-align: center;
  font-size: 26px;
  line-height: 32px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
`;

class SampleForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: {
        xs: {
          span: 12,
          offset: 6
        },
        sm: {
          span: 12,
          offset: 6
        },
        md: {
          span: 8,
          offset: 8
        },
        lg: {
          span: 6,
          offset: 9
        }
      }
    };

    return (
      <section>
        <Subtitle>Request an early access:</Subtitle>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout}>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="your@email.com"
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout}>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(
              <Checkbox style={{ color: "#FFF" }}>
                I have read the <a href="">agreement</a>
              </Checkbox>
            )}
          </FormItem>
          <FormItem {...formItemLayout}>
            <Button style={{}} type="primary" htmlType="submit">
              Send
            </Button>
          </FormItem>
        </Form>
      </section>
    );
  }
}

const WrappedRegistrationForm = Form.create()(SampleForm);
export default WrappedRegistrationForm;
