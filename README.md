# react-extended-component

Updating the state of a complex component, without using Redux or Flux in React is very complex process. If you want to update a key in the state object, usually you do it like this

```javascript
this.setState({
    fname: "Shridhar",
    lname: "Kaushik",
    emails: [
        "user@gmail.com",
        "user@hotmail.com"
    ]
})

//or for more complex operations like pushing in array or concatenation of other state values, you do it like this

this.setState(prevState=>{
    var prevEmails = prevState.emails
    return {
        name: prevState.fname+" "+prevState.lname,
        emails: prevEmails.concat(["user@yahoo.co.in"])
    }
})


//to get the values from state
this.state.emails[0]

//Above will throw an error if emails key does not exist on state
```



But using `react extended-component` this is a very hassle free process, like below:

```javascript
//Importing methods
import {updateState, getState} from "react-extended-component"


//For single key simple updation
updateState(this, 'fname', 'Shridhar')

//For multiple key simple updation
updateState(this, {
    fname: "Shridhar",
    lname: "Kaushik"
})

//For single nested keys updation
updateState(this, "user.fname", "Shridhar")

/*
After updation state will be
{
	"user": {
		"fname": "Shridhar
	}
}
*/


//For multiple key simple updation
updateState(this, {
    "user.fname": "Shridhar",
    "user.lname": "Kaushik"
})

/*
After updation state will be
{
	"user": {
		"fname": "Shridhar,
		"lname": "Kaushik"
	}
}
*/


//For custom operation on state object
updateState(this, state=>{
    // Assuming user.emails is an array on the original state object
    state.user.emails.push("user@yahoo.co.in")
    // Removing value from array using pull from lodash
    _.pull(state.user.emails, "user@gmail.com")
})

/*
As you can see above, instead of creating a new object to merge with prevState, we're modifying the state object passed into the first parameter, which is a clone of the original state object, thus, it is safe to modify the original variable
*/


//To get a key from state
getState(this, "user.emails[0]")
//Above will return null if any of the parent key is not found and wwill not throw an error


//To get a default value if provided key does not exist on the state
getState(this, "user.emails[0]", 'example@gmail.com')
```

