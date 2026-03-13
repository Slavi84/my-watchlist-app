import { useState } from "react";
function RegistrationForm() {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  return (
    <fieldset>
      <legend>Rgistration Form</legend>
      <form name="register-user" action="FORMPROCESSING.COM" method="GET">
        <label htmlFor="first-name">*First name:</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First name"
          required
        />
        <label htmlFor="last-name">*Last name:</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Last name"
          required
        />
        <label htmlFor="email-address">*Email:</label>
        <input
          type="email"
          name="email"
          id="email-address"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">*Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" name="submit" value="Submit" />
      </form>
    </fieldset>
  );
}
export default RegistrationForm;
