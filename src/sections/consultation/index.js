import React, { Component } from "react";
import { Form, Select, Input, Button } from "antd";
import "./style.css";

const { Option } = Select;

class Consultation extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="consult" id="consultation">
        <div className="consult_title">
          <span className="consult_mainTitle">Get a Free Consultation</span>
          <span className="consult_subTitle">
            With no pressure to commit and no money collected until we sell your
            home, why not schedule your free consultation and let our expert
            knowledge and resources help you realize your goal of buying or
            selling a home.
          </span>
        </div>
        <div className="consult_contact">
          <Form onSubmit={this.handleSubmit} className="consult_form">
            <div className="consult_personDetail">
              <Form.Item>
                {getFieldDecorator("Your Name", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input placeholder="Your Name" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("Your Email", {
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
                })(<Input placeholder="Your Email" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("Your Phone Number", {
                  rules: [
                    {
                      type: "number"
                    },
                    {
                      required: true,
                      message: "Please input your Phone!"
                    }
                  ]
                })(<Input placeholder="Your Phone Number" />)}
              </Form.Item>
            </div>
            <div className="consult_cityDetail">
              <Form.Item>
                {getFieldDecorator("city", {
                  rules: [
                    { required: true, message: "Please select your city!" }
                  ]
                })(
                  <Select
                    placeholder="Select your city"
                    onChange={this.handleSelectChange}
                  >
                    <Option value="New Yourk">New Yourk</Option>
                    <Option value="Florida">Florida</Option>
                    <Option value="London">London</Option>
                    <Option value="Milan">Milan</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("property", {
                  rules: [
                    { required: true, message: "Please select your property!" }
                  ]
                })(
                  <Select
                    placeholder="Buy a property"
                    onChange={this.handleSelectChange}
                  >
                    <Option value="Rent a property">Rent a property</Option>
                    <Option value="Sell a property">Sell a property</Option>
                    <Option value="Others">Others</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send Message
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
const SignIn = Form.create({ name: "sign in" })(Consultation);
export default SignIn;
