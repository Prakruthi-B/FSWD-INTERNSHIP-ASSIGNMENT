import React, { useState } from "react";

const SignupForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Validation function
  const validate = () => {
    let newErrors = {};

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!form.email.match(emailPattern)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    const passwordPattern =
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&]).{8,}$/;

    if (!form.password.match(passwordPattern)) {
      newErrors.password =
        "Password must be 8+ chars, include uppercase, lowercase, number & special character";
    }

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Signup successful!");
      setForm({ email: "", password: "" });
    } else {
      setSuccess("");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          style={styles.input}
        />
        {errors.password && <p style={styles.error}>{errors.password}</p>}

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>

      {success && <p style={styles.success}>{success}</p>}
    </div>
  );
};

export default SignupForm;
// Styles
const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "12px",
    textAlign: "left",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
};