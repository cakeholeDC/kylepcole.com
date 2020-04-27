// form for formspree.io
import React from "react";
import styled from 'styled-components'

const ContactMe = styled.form`
  width: 100%;

  fieldset {
    // width: 100%;
    margin: 0;
    padding: 1rem 1.5rem;
    border: 1px solid lightgray;
    border-radius: .5rem;
    box-shadow: 0 0px 1px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  }

  label {
    width: 100%;
    display: block;
    font-size: 1rem;
    margin-bottom: .5em;
    padding-top: .2em;
    display: flex;
    align-items: baseline;
    font-family: 'Fjalla One', sans-serif;
  }
  
  input, textarea {
    font-size: .85rem;
    display: block;
    width: calc(100% - 1.5rem);
    border: 1px solid rgba(0,0,0,0.2);
    background-color: rgba(255,255,255,0.9);
    padding: .75em 1em;
    margin-bottom: 1.5em;
  }

  button{
    padding: .5rem 1rem;
    font-size: 1.5em;
    font-family: 'Fjalla One', sans-serif;
    text-transform: uppercase;

  }
`

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <ContactMe
          onSubmit={ this.submitForm }
          action="https://formspree.io/meqlydne"
          method="POST"
        >
        <fieldset>
          <label>Name:</label>
          <input required type="text" name="name" placeholder="Fred Flintstone"/>
          <label>Email:</label>
          <input required type="email" name="email" placeholder="fred@bedrock.com"/>
          <label>Message:</label>
          <textarea required rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." ></textarea>
          <input type="text" name="_gotcha" style={{display:"none"}} />
          <input type="hidden" name="_subject" value="Message from kylepcole.com!" />
          { /* @TODO - add CORS protection https://help.formspree.io/hc/en-us/articles/360038664534-Restrict-to-Domain */}
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Send</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </fieldset>
      </ContactMe>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}