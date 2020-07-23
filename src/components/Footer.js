import React from "react"

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      count: 0,
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "male",
      favColor: "red"
    }
    this.changeCount = this.changeCount.bind(this)
    this.changeLogin = this.changeLogin.bind(this)
    this.changeName = this.changeName.bind(this)
  }

  changeCount() {
    this.setState(prevState => {
      prevState.count += 1
      return prevState
    })
  }

  changeLogin() {
    this.setState(prevState => {
      prevState.isLoggedIn = !prevState.isLoggedIn
      return prevState
    })
  }

  changeName(event) {
    const {name, value, type, checked} = event.target
    this.setState(type === "checkbox" ? {[name]: checked}:{[name]: value})
  }

  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
      fontSize: 25
    }

    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "#8914A3"
    } else {
      timeOfDay = "night"
      styles.color = "#D90000"
    }

    return (
      <div>
        <footer style={styles}>
          {`Good ${timeOfDay}! You are logged 
        ${this.state.isLoggedIn ? "in" : "out"}`}
        </footer>
        <footer>
          Count is {this.state.count}
          &nbsp;
          <button onClick={this.changeCount}>
            Change!
          </button>
          &nbsp;
          <button onClick={this.changeLogin}>
            {this.state.isLoggedIn ? "Logout" : "Login"}
          </button>
          <br/>
          <p>
            {this.state.firstName} {this.state.lastName}
             - {this.state.isFriendly && "is friendly"}
          </p>
          <p>You are a {this.state.gender}</p>
          <p>Your favorite color is {this.state.favColor}</p>
          <form>
            <input
              type="text"
              value={this.state.firstName}
              name="firstName"
              placeholder="First Name"
              onChange={this.changeName}
            />
            &nbsp;
            <input
              type="text"
              value={this.state.lastName}
              name="lastName"
              placeholder="Last Name"
              onChange={this.changeName}
            />
            <br/>
            <label>
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.changeName}
              /> Is friendly
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.changeName}
                /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.changeName}
              /> Female
            </label>
            {/* Formik Library*/}
            <br/>
            <label>
              Favourite Color:
            <select
              value={this.state.favColor}
              onChange={this.changeName}
              name="favColor">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
            </label>
            <button>Submit</button>
          </form>
        </footer>
      </div>
    )
  }
}

export default Footer