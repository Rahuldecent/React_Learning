import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  const handleEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const handleSave = (id) => {
    if (editText.trim() !== "") {
      dispatch(updateTodo({ id, text: editText }))
      setEditId(null)
    }
  }

  return (
    <>
      <div className="text-xl font-bold mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">
              {editId === todo.id ? (
                <input
                  className="px-2 py-1 rounded text-white bg-zinc-700 border border-gray-400 focus:outline-none"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                todo.text
              )}
            </div>

            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md flex items-center gap-1"
                >
                  💾 Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md flex items-center gap-1"
                >
                  ✏️ Update Todo
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
