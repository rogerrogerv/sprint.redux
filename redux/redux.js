//dispatch actions that would produce a new state before serving that state (or a message showing that state was changed) through the API.
const { createStore } = require("redux");

const initialState = {
  projects: [
    {
      id: "redux",
      name: "redux",
      url: "github.com/reactjs/redux",
      buildCommand: "yarn test",
      language: "js",
    },
    {
      id: "Noodles",
      name: "Noodles",
      url: "google.com",
      buildCommand: "go start",
      language: "bash",
    },
    {
      id: "23",
      name: "node-fetch",
      url: "github.com/node-fetch/redux",
      buildCommand: "yarn test:all",
      language: "TypeScript",
    },
  ],
  builds: []
};


function indexOf(id) {
    return initialState.projects.findIndex((project) => project.id === id);
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_PROJECTS':
            return {...state, projects: state.projects};
        case 'POST_PROJECT':
            return {...state, projects: [...state.projects, action.project]};
        case 'GET_PROJECT':
            return {...state, projects: state.projects[indexOf(action.id)]};
        case 'EDIT_PROJECT':
            // const projectsCopy = {...state.projects};
            // const objToEdit = projectsCopy[action.id];
            // const editedProject = Object.assign(objToEdit, action.project);
            // return {...state, projects: projectsCopy}; // [1]:{object}
        case 'DELETE_PROJECT': 
            console.log(state.projects);
            return {...state, projects: output.filter(project => project.id != action.id)}
        default:
            return state;
    }
}


// const reducerA(state, action) => {
// const x = { ...oldState, ...newState };
// return x;
// }

//     return Object.assign({}, oldState, newState)
// is the same thing as

//create our store
const store = createStore(reducer);

// //GET PROJECTS//
// //get projects and produce new state
// store.dispatch({type: 'GET_PROJECTS'});
// //get the new state
// let getProjects = store.getState().projects;

// //POST PROJECT//
// const abc = {id: "233"}
// //action creator
// function addNewProjectAction (project) {
//     return {type: "POST_PROJECT", project: project};
// }
// //add project and produce new state
// store.dispatch(addNewProjectAction(abc));
// //get the new state
// const postProject = store.getState().projects;

// //GET PROJECT//
// function getProject (id) {
//     return {type: "GET_PROJECT", id: id};
// }
// store.dispatch(getProject("23"));
// const fetchedProject = store.getState().projects;

//EDIT PROJECT//
store.dispatch({type: "EDIT_PROJECT", id: "23", project: {name: "whatever"}})
const editedProject = store.getState().projects;
console.log("editedProject ******>", editedProject)

// //DELETE PROJECT//
// store.dispatch({type: "DELETE_PROJECT", id: "23"});
// const deleteProject = store.getState().projects;
// console.log("deleteProject--->", deleteProject)
