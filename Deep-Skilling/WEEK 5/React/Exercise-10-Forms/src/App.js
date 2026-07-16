import { useState } from 'react';
function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '', course: 'react' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const validate = () => {
    const e = {};
    if (!form.name) e.name = 'Name is required';
    if (!form.email.includes('@')) e.email = 'Valid email required';
    if (form.password.length < 6) e.password = 'Min 6 characters';
    return e;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length === 0) { setSubmitted(true); setErrors({}); }
    else setErrors(v);
  };
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  if (submitted) return <div><h2>Registration Successful!</h2><p>Name: {form.name}</p><p>Email: {form.email}</p><p>Course: {form.course}</p></div>;
  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div><label>Name:</label><br/><input name="name" value={form.name} onChange={handleChange} />{errors.name && <span style={{color:'red'}}>{errors.name}</span>}</div>
        <div><label>Email:</label><br/><input name="email" value={form.email} onChange={handleChange} />{errors.email && <span style={{color:'red'}}>{errors.email}</span>}</div>
        <div><label>Password:</label><br/><input name="password" type="password" value={form.password} onChange={handleChange} />{errors.password && <span style={{color:'red'}}>{errors.password}</span>}</div>
        <div><label>Course:</label><br/><select name="course" value={form.course} onChange={handleChange}><option value="react">React</option><option value="dotnet">.NET</option><option value="angular">Angular</option></select></div>
        <br/><button type="submit">Register</button>
      </form>
    </div>
  );
}
export default RegistrationForm;
