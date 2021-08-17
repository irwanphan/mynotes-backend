const { addNoteHandler,
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler,
    deleteNoteByIdHandler 
} = require("./handler");

// const routes = [
//     {
//         method: 'GET',
//         path: '/',
//         handler: (request, h) => {
//             return 'Homepage';
//         },
//     },
//     {
//         method: 'POST',
//         path: '/notes',
//         // handler: (request, h) => {
//         //     return 'save a note';
//         // },
//         handler: addNoteHandler,
//         options: {
//             cors: {
//                 origin: ['*']
//             }
//         }
//     },
//     {
//         method: 'GET',
//         path: '/notes',
//         handler: getAllNotesHandler,
//     },
//     {
//         method: 'GET',
//         path: '/notes/{id}',
//         handler: getNoteByIdHandler,
//     },
//     {
//         method: 'PUT',
//         path: '/notes/{id}',
//         handler: editNoteByIdHandler,
//     },
//     {
//         method: 'DELETE',
//         path: '/notes/{id}',
//         handler: deleteNoteByIdHandler,
//     },
// ]

const routes = () => {}

module.exports = routes
