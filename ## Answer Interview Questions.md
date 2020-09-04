## Interview Questions



1. Explain how to build stateful class components.
- Class component is always a  stateful component. It is created by extending the React Component class.
- A stateful coponent is depent on its state object and can change its own state.

class APP extends React.Component {
    constructor()
        super()
            render(){

            }
}

2. Describe the different phases of the component lifecycle.

- Mounting(Birth) = setting element to the DOM 
- Updating(Growth) = updating whenever componetns or props changes 
- Un-mouting(Death) = removing component from the DOM

3. Demonstrate an understanding of class component lifecycle methods.

- we must define React.Component all others are optional
- a chain of events that happen from the birth of a react component to its death -  go through the circle of birth -> growth -> death 
- such as componentDidMount() or componentDidUpdate

4. Define stateful logic.

- any code that uses state, but in the case of hooks, behavior created with the use of one or more hooks 

5. Describe how to test a React component with React Testing Library.

- we have to test what you expect the app to do, in order to find unexpected behavior that may lead to fixing bugs 
--Arrange : set up our component to be tested & initialize getByText that we will run later : const { getByText } = render(<APP />)
--Act     : we will use what the getByText to pull the element wa want to text and store it into a variable for use later : const something = getByText(/content/i)
--Assert  : now we wil assert that the element is being rendered properly : expect(something0.toBeInTheDocument())