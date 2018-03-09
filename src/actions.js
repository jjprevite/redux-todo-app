/*
 * action types
 */

 export const ADD_TODO = 'ADD_TODO';
 export const TOGGLE_TODO = 'TOGGLE TODO';
 export const SET_VISABILITY_FILTER = 'SET_VISABILITY_FILTER';


 /*
  * other constants
  */
 
  export const VisibilityFilters = {
      SHOW_ALL: 'SHOW_ALL',
      SHOW_COMPLETED: 'SHOW_COMPLETED',
      SHOW_ACTIVE: 'SHOW_ACTIVE'  
  }

  /*
   * action creators
   */ 

   export function addTodo(text) {
       return {
           type: ADD_TODO,
           text
       }
   }

   export function toggleTodo(index) {
       return {
           type: TOGGLE_TODO,
           index
       }
   }

   export function setVisabilityFilter(filter) {
       return {
           type: SET_VISABILITY_FILTER,
           filter
       }
   }