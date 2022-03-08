const Form = ({ sendEmail }) => {
  return (
    <form onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder="Name" required />
      <label htmlFor="number">Phone number</label>
      <input type="number" name="number" placeholder="Phone number" required />
      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" placeholder="Email" required />
      <label>Inquiry</label>
      <select name="inquiry" required>
        <option value="catering">Catering</option>
        <option value="job">Job</option>
        <option value="others">Others</option>
      </select>
      <textarea
        type="text"
        name="message"
        placeholder="Leave us a messege please..."
        rows="4"
      />
      <button className="form-btn">Submit</button>
    </form>
  );
};
export default Form;
