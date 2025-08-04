

const sign = () => {
  return (
    <>
          <form action="#">
              <fieldset>
                  <legend>Sign In</legend>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name='signInEmail' id='signInEmail' />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" autoComplete='false' />
                  </div>
                    <div className="form-group">
                        <label htmlFor="rememberMe">
                            <input type="checkbox" id="rememberMe" name="rememberMe" />
                            Remember Me
                      </label>
                    </div>
                  <button type="submit" className="sign-in-btn">Sign In</button>
                  <p className="forgot-password"><a href="/forgot-password">Forgot Password?</a></p>
                  <p className="no-account">Don't have an account? <a href="/register">Register</a></p>
                  <p>_______________or sign with_______________________</p>
                    <div className="social-sign-in">
                        <button className="google-sign-in">Google</button>
                        <button className="facebook-sign-in">Facebook</button>
                      <button className="tiktok-sign-in">Github</button>
                    </div>
              </fieldset>
      </form>
    </>
  )
}

export default sign
