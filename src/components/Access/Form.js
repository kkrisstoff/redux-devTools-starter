import React from 'react';

var Form = React.createClass({

    onFormSubmit: function (e) {
        e.preventDefault();
        var form = e.target,
            inputName = form[0],
            inputPass = form[1],
            name = inputName.value,
            pass = inputPass.value;

        inputName.value = '';
        inputPass.value = '';

        console.log(">> onFormSubmit", name, pass);
        //this.props.onFormSubmit(action, name, pass);
    },

    render: function(){

        return (
            <div>
                <form id="form" name="login" className="login-form" onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" id="name" type="text" name="username" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password</label>
                        <input className="form-control" id="pass" type="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="error">
                        <span className="error-msg">&nbsp;</span>
                    </div>
                    <div className="form-group">
                        <input className="btn" type="submit" />
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Form;