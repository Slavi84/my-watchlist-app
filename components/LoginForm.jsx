import { useState } from "react";
function LoginForm() {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  return (
    <fieldset>
      <legend>Log in Form</legend>
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
    </fieldset>
  );
}
export default LoginForm;
