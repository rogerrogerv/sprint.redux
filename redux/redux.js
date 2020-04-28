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
  switch (action.type) {
    case "GET_PROJECTS":
      return { ...state, projects: state.projects };
    case "POST_PROJECT":
      return { ...state, projects: [...state.projects, action.project] };
    case "GET_PROJECT":
      return { ...state, projects: state.projects[indexOf(action.id)] };
    case "EDIT_PROJECT":
      const projectsCopy = { ...state.projects };
      for (var key in projectsCopy) {
        if (projectsCopy[key].id === action.id) {
          Object.assign(projectsCopy[key], action.project);
        }
      }
      return {...state, projects: projectsCopy};
    case 'DELETE_PROJECT': 
    const projectObj = [ ...state.projects ];
      console.log("************** delete I*************", state.projects);
      return {...state, projects: projectObj.filter(project => project.id != action.id)}
    default:
      return state;
  }
}

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
// store.dispatch({type: "EDIT_PROJECT", id: "23", project: {name: "whatever"}})
// const editedProject = store.getState().projects;
// console.log("editedProject ******>", editedProject)

//DELETE PROJECT//
store.dispatch({type: "DELETE_PROJECT", id: "Noodles"});
const deleteProject = store.getState().projects;
console.log("************ deleteProject OUTER ************", deleteProject)
