import React, { useState } from 'react';
import { Grid, makeStyles, createStyles, Button } from '@material-ui/core';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) =>
  createStyles({
    sendButton: {
        justifyContent: "center",
        width: "50%",
        border: `2px solid ${theme.colors.tertiary}`,
        color: theme.colors.secondary,
        margin: "10px 0",
        marginTop: "25px",
        padding: "15px 30px",
        borderRadius: "4px",
    },

    textField: {
        width: "100%",
        height: "80px",
        padding: "12px 20px",
        margin: "8px 0",
        marginTop: "35px",
        border: `4px solid ${theme.colors.tertiary}`,
        borderRadius: "6px",
        boxSizing: "border-box",
        justifyContent: "center",
    },
  })
);

const ContactForm = () => {
    const classes = useStyles();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
            "gmail",
            "template_1j5wdec",
            e.target,
            "user_adsf421512x3a4f5d"
        )
        .then(
            (result) => {
            console.log(result.text);
            },
            (error) => {
            console.log(error.text);
            }
        );
        e.target.reset();
    };

    return (
        <div className="form">
            <form className="form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={classes.textField}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={classes.textField}
                />

                <input
                    type="text"
                    placeholder="Type a Message"
                    name="message"
                    className={classes.textField}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    className={classes.sendButton}
                >
                    Send
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;