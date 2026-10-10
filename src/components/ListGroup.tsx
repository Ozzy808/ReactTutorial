function ListGroup() {
    const items = ['New York', 'Zanzibar', 'Dubai', 'Tokyo', 'London'];

    return (
        <>
            <h1>List</h1>

            {items.length === 0 ? (
                <p>Ozzy!!! No items found!</p>
            ) : (
                <ul className="list-group">
                    {items.map((item,index) => (
                        <li
                            className="list-group-item"
                            key={item}
                            onClick={() => console.log(item, index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default ListGroup;