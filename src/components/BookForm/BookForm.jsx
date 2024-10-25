// import style from "./Book.module.css";
import { Field, Form, Formik } from "formik";

const BookForm = () => {
  const handleSubmit = (values, actions) => [
    console.log("values", values),
    actions.resetForm(),
  ];

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        bookingDate: "",
        comment: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="name" />
        <br />
        <Field name="email" />
        <br />
        <Field name="bookingDate" />
        <br />
        <Field name="comment" />
        <br />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
