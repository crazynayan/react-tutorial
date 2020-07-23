import React from "react"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      character: {},
      isLoading: false
    }
  }

  async componentDidMount() {
    this.setState({isLoading: true})
    try {
      const response = await fetch("https://swapi.dev/api/people/2")
      if (response.ok) {
        const data = await response.json()
        this.setState({
          character : data,
          isLoading : false
        })
      } else {
        console.log(response.statusText)
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <header className="navbar">
        {this.state.isLoading ?
          "Loading..." :
          `${this.state.character.name}! 
          ${this.state.character.mass} kg!`}
      </header>
    )
  }
}

export default Header