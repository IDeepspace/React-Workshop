import React from 'react'

const List = props => {
    const { messages } = props
    const list = messages.map(t => <li key={t.id}>{t.text}</li>)

    return <ul>{list}</ul>
}

export default List
