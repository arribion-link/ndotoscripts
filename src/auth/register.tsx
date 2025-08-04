

const register = () => {
  return (
    <>
          <form action="#">
              
              <fieldset>
                  <legend>Create an account for free</legend>
                  <br />
                  <div className="form-group"> 
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="username" name="username" required />
                  </div>
                  <br />
                  <div className="form-group">
                      <label htmlFor="secondName"></label>
                      <input type="text" />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                  </div>
                  <br /> 
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                  </div>
                  <br />
                    <div className="form-group">
                        <label htmlFor="terms">
                        <input type="checkbox" id="terms" name="terms" required />
                        I agree to the terms and conditions
                      </label>
                    </div>
                  <button type="submit" className="register-btn">Register</button>
              </fieldset>
      </form>
    </>
  )
}

export default register
